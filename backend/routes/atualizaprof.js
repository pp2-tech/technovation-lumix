const express = require("express");
const router = express.Router();
const cadprof = require("../models/cad.models.js");
router.use(express.json());

router.put ("/", async function(req, res){
    try{
        const cadprof = await cadprof.findByPk(req.body.id);

        await cadprof.updade ({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });

        res.status(200).json(cadprof);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;