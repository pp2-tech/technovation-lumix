const express = require("express");
const router = express.Router();
const Tempo = require("../models/tempo.models.js");
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const novoTempo = await Tempo.create({
            
            hora_inicio: req.body.hora_inicio,
            hora_final: req.body.hora_final
        });
        res.status(201).json({ message: "Tempo salvo com sucesso", data: novoTempo });
    } catch (error) {
        console.error("tempo create error:", error);
        res.status(500).json({ error: error.message || "Erro ao salvar tempo" });
    }
});

module.exports = router;
