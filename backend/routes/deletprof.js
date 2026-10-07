const express = require("express");
const router = express.Router();
const cadprof = require("../models/cadprof.models");
router.use(express.json());

router.post ("/", async function (req, res) {
    try {
        const cad = await cad.findByPk(req.body.id);

        await cad.destroy();
        res.status(200).json({ sucesso: "foi um sucesso" });
    } catch (error) {
        console.error('deletprof error:', error);
        res.status(500).json(error);
    };
});

module.exports = router;