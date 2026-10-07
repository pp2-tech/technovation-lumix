const express = require("express");
const router = express.Router();
const Tempo = require("../models/tempo.models.js");
const Intermediaria = require("../models/Intermediaria.js");
const cadprof = require("../models/cadprof.models");
const cadaluno = require("../models/cad.models");
const Editais = require("../models/Editais.models");
router.use(express.json());

Tempo.belongsTo(Intermediaria, { foreignKey: "id_inter" });
Intermediaria.belongsTo(cadprof, { foreignKey: "professores" });
Intermediaria.belongsTo(cadaluno, { foreignKey: "alunos" });
Intermediaria.belongsTo(Editais, { foreignKey: "editais" });

router.get("/", async (req, res) => {
    try {
        const tempos = await Tempo.findAll({
            include: [
                {
                    model: Intermediaria,
                    attributes: ["id", "professores", "alunos", "editais"],
                    include: [
                        { model: cadprof, attributes: ["id", "nome", "matricula", "email"] },
                        { model: cadaluno, attributes: ["id", "nome", "matricula", "email"] },
                        { model: Editais, attributes: ["id", "nome", "descricao", "carga_minima"] },
                    ],
                },
            ],
        });
        res.status(200).json(tempos);
    } catch (error) {
        console.error("verTempo error:", error);
        res.status(500).json({ error: "Erro ao buscar tempos" });
    }
});

module.exports = router;
