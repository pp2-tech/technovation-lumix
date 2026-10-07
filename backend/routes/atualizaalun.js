const express = require("express");
const router = express.Router();
const cadaluno = require("../models/cad.models.js");
router.use(express.json());

router.put ("/", async function(req, res){
    try{
        console.log('atualizaalun body:', req.body);
        const aluno = await cadaluno.findByPk(req.body.id);
        if (!aluno) {
            return res.status(404).json({ erro: "Aluno não encontrado" });
        }

        await aluno.update ({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });

        res.status(200).json(aluno);
    } catch (error) {
        console.error('atualizaalun error:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;