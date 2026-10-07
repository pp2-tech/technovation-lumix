const express = require("express");
const router = express.Router();
const Tempo = require("../models/tempo.models.js");
router.use(express.json());

router.put("/", async (req, res) => {
    try {
        const tempo = await Tempo.findByPk(req.body.id);
        if (!tempo) {
            return res.status(404).json({ erro: "Tempo nao encontrado" });
        }

        await tempo.update({
            prof: req.body.prof,
            edit: req.body.edit,
            aluno: req.body.aluno,
            hora_inicio: req.body.hora_inicio,
            hora_final: req.body.hora_final
        });

        res.status(200).json(tempo);
    } catch (error) {
        console.error("atualizarTempo error:", error);
        res.status(500).json(error);
    }
});

module.exports = router;
