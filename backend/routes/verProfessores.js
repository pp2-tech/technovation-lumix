const express = require("express");
const router = express.Router();
const cadprof = require("../models/cadprof.models");
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const professores = await cadprof.findAll();
        res.status(200).json(professores);
    } catch (error) {
        console.error('verProfessores error:', error);
        res.status(500).json({ error: 'Erro ao buscar professores' });
    }
});

module.exports = router;
