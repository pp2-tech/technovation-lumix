require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();
const db = require('./config/db');
server.use(cors());
server.use(express.json());


//editais//
const cadastrarEditais = require("./routes/cadastroEditais.js");
const deletarEditais = require("./routes/deletarEditais.js");
const atualizarEditais = require("./routes/atualizarEditais.js");
const verEditais = require("./routes/verEditais.js");
const verEsitalEspecifico = require('./routes/verEditalEspecifico.js');

//cadastros//
const cadalunos = require("./routes/cadaluno.js");
const cadprof = require("./routes/cadprof.js");
const deletaluno = require("./routes/deletaluno.js");
const deletprof = require("./routes/deletprof.js");
const atualizaalun = require("./routes/atualizaalun.js");
const atualizaprof = require("./routes/atualizaprof.js");
const verAlunos = require("./routes/verAlunos.js");
const verProfessores = require("./routes/verProfessores.js");
const intermediaria = require("./routes/intermediaria.js");
const verIntermediaria = require("./routes/verIntermediaria.js");
const tempo = require("./routes/tempo.js");
const verTempo = require("./routes/verTempo.js");
const atualizarTempo = require("./routes/atualizarTempo.js");
const deletarTempo = require("./routes/deletarTempo.js");

//editais//
server.use('/cadastrarEditais', cadastrarEditais);
server.use('/deletarEditais', deletarEditais);
server.use('/atualizarEditais', atualizarEditais);
server.use('/verEditais', verEditais);
server.use('/verEditalEspecifico', verEsitalEspecifico);

//cadastros//
server.use("/cadalunos", cadalunos);
server.use('/verAlunos', verAlunos);
server.use('/verProfessores', verProfessores);
server.use("/cadprof",cadprof);
server.use("/deletaluno", deletaluno);
server.use("/deletprof", deletprof);
server.use("/atualizaalun", atualizaalun);
server.use("/atualizaprof", atualizaprof);
server.use('/intermediariaCadastro', intermediaria);
server.use('/verIntermediaria', verIntermediaria);
server.use('/tempoCadastro', tempo);
server.use('/verTempo', verTempo);
server.use('/atualizarTempo', atualizarTempo);
server.use('/deletarTempo', deletarTempo);

async function testDBConnection() {
    try {
        await db.authenticate();
        await db.sync();
        const port = process.env.PORT || 3006;
        server.listen(port, () => {
            console.log(`Server rodando na porta ${port}`);
        });
    } catch (error) {
        console.error('erro ao conectar:', error);
    }
}

testDBConnection();
