
//criando servidro//
const express = require("express");


//sincronizando bd//



//rota//
const router = express.Router();
const cadaluno = require("../models/cad.models");
router.use(express.json())

router.post ("/",async function(req, res){
    try {
        const { nome, matricula, email, senha } = req.body;
        const novouser = await cadaluno.create ({
            nome: req.body.nome,
            matricula: req.body.matricula,
            email: req.body.email,
            senha: req.body.senha
        });
        res.status(200).json({
            message: "usuario salvo com sucesso",
            user: novouser
        });
    } catch (error) {
        console.error('cadaluno error:', error);
        res.status(500).json({error: "Erro ao salvar usuário"});
    }
});

module.exports = router;