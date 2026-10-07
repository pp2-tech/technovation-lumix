const express = require("express");
const router = express.Router();
const Intermediaria = require("../models/Intermediaria.js");
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const novoRegistro = await Intermediaria.create({
            professores: req.body.professores,
            alunos: req.body.alunos,
            editais: req.body.editais
        });
        res.status(201).json({ message: "Registro salvo com sucesso", data: novoRegistro });
    } catch (error) {
        console.error('intermediaria create error:', error);
        res.status(500).json({ error: 'Erro ao salvar registro intermediário' });
    }
});

module.exports = router;
