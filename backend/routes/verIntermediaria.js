const express = require("express");
const router = express.Router();
const Intermediaria = require("../models/Intermediaria.js");
const cadprof = require("../models/cadprof.models");
const cadaluno = require("../models/cad.models");
const Editais = require("../models/Editais.models");
router.use(express.json());

Intermediaria.belongsTo(cadprof, { foreignKey: "professores" });
Intermediaria.belongsTo(cadaluno, { foreignKey: "alunos" });
Intermediaria.belongsTo(Editais, { foreignKey: "editais" });

router.get("/", async (req, res) => {
    try {
        const registros = await Intermediaria.findAll({
            include: [
                { model: cadprof, attributes: ["id", "nome", "matricula", "email"] },
                { model: cadaluno, attributes: ["id", "nome", "matricula", "email"] },
                { model: Editais, attributes: ["id", "nome", "descricao", "carga_minima"] },
            ],
        });
        res.status(200).json(registros);
    } catch (error) {
        console.error('verIntermediaria error:', error);
        res.status(500).json({ error: 'Erro ao buscar registros intermediários' });
    }
});

module.exports = router;
