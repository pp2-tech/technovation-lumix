import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './manipularIntermediaria.css';

function ManipularIntermediaria() {
    useEffect(() => {
        document.title = 'Manipular associações | Lumix';
    }, []);

    const [resposta, setResposta] = useState('');
    const professoresId = useRef();
    const alunosId = useRef();
    const editaisId = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);
        setTimeout(() => setResposta(''), 3000);
    }

    async function cadastrarIntermediaria() {
        try {
            await api.post('/intermediariaCadastro', {
                professores: professoresId.current.value,
                alunos: alunosId.current.value,
                editais: editaisId.current.value,
            });
            professoresId.current.value = '';
            alunosId.current.value = '';
            editaisId.current.value = '';
            mostrarMensagem('Registro intermediário cadastrado com sucesso');
        } catch (error) {
            console.error('Erro ao cadastrar intermediária:', error);
            mostrarMensagem('Erro ao cadastrar registro intermediário');
        }
    }

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Associações</p><h1>Manipular Intermediária</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {resposta && <p className="status-message" role="status" aria-live="polite" aria-atomic="true">{resposta}</p>}
            <section className="page-panel" aria-labelledby="cadastrar-associacao">
                <h2 id="cadastrar-associacao">Cadastrar associação</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); cadastrarIntermediaria(); }}>
                    <div className="input-field"><label htmlFor="associacao-professor">ID do professor</label><input id="associacao-professor" ref={professoresId} type="number" min="1" required /></div>
                    <div className="input-field"><label htmlFor="associacao-aluno">ID do aluno</label><input id="associacao-aluno" ref={alunosId} type="number" min="1" required /></div>
                    <div className="input-field"><label htmlFor="associacao-edital">ID do edital</label><input id="associacao-edital" ref={editaisId} type="number" min="1" required /></div>
                    <button className="btn" type="submit">Cadastrar associação</button>
                </form>
            </section>
        </main>
    );
}

export default ManipularIntermediaria;
