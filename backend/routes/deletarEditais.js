const express = require("express");
const router = express.Router();
const Editais = require("../models/Editais.models");
router.use(express.json());

router.post("/", async (req, res) => {
    try{
        const editais = await Editais.findByPk(req.body.id);
        if (!editais) {
            return res.status(404).json({ erro: "Edital não encontrado" });
        }

        await editais.destroy();
        
        res.status(200).json({ sucesso: "foi um sucesso" });
    } catch (error) {
        console.error('deletarEditais error:', error);
        res.status(500).json(error);
    };
});

module.exports = router;