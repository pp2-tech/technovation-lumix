const express = require("express");
const router = express.Router();
const cadaluno = require("../models/cad.models");
router.use(express.json());

router.post ("/", async function (req, res) {
    try {
        const cad = await cadaluno.findByPk(req.body.id);

        await cad.destroy();
        res.status(200).json({ sucesso: "foi um sucesso" });
    } catch (error) {
        console.error('deletaluno error:', error);
        res.status(500).json(error);
    };
});

module.exports = router; 