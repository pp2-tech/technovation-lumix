const express = require("express");
const router = express.Router();
const Editais = require("../models/Editais.models");
router.use(express.json());

router.get("/", async (req, res) => {
    try{
        const editais = await Editais.findByPk(req.body.id);
            if (!editais) {
                return res.status(404).json({ erro: "Edital não encontrado" });         
            };
        res.status(200).json(editais);
    } catch (error) {        console.error('verEditalEspecifico error:', error);        res.status(500).json(error);
    };
});

module.exports = router;