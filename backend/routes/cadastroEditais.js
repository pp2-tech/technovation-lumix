const express = require("express");
const router = express.Router();
const Editais = require("../models/Editais.models");
router.use(express.json());

router.post("/", async (req, res) => {
    try{
        const editais = await Editais.create({
            id: req.body.id,
            nome: req.body.nome,
            descricao: req.body.descricao,
            carga_minima: req.body.carga_minima
        });
        res.status(200).json(editais);
    } catch (error) {
        console.error('cadastroEditais error:', error);
        res.status(500).json({ error: error.message || 'Erro ao cadastrar edital' });
    };
});

module.exports = router;