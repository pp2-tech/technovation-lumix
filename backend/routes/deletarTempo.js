const express = require("express");
const router = express.Router();
const Tempo = require("../models/tempo.models.js");
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const tempo = await Tempo.findByPk(req.body.id);
        if (!tempo) {
            return res.status(404).json({ erro: "Tempo nao encontrado" });
        }

        await tempo.destroy();

        res.status(200).json({ sucesso: "foi um sucesso" });
    } catch (error) {
        console.error("deletarTempo error:", error);
        res.status(500).json(error);
    }
});

module.exports = router;
