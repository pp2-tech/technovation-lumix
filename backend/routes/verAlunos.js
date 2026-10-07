const express = require("express");
const router = express.Router();
const cadaluno = require("../models/cad.models");
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const alunos = await cadaluno.findAll();
        res.status(200).json(alunos);
    } catch (error) {
        console.error('verAlunos error:', error);
        res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
});

module.exports = router;
