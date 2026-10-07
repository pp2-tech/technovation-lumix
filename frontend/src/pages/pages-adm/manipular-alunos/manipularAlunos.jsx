import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './manipularAlunos.css';

function ManipularAlunos() {
    useEffect(() => {
        document.title = 'Manipular alunos | Lumix';
    }, []);

    const [resposta, setResposta] = useState('');
    const cadastroNome = useRef();
    const cadastroMatricula = useRef();
    const cadastroEmail = useRef();
    const cadastroSenha = useRef();

    const deletarId = useRef();
    const editarId = useRef();
    const editarNome = useRef();
    const editarEmail = useRef();
    const editarSenha = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);
        setTimeout(() => setResposta(''), 3000);
    }

    async function cadastrarAluno() {
        try {
            await api.post('/cadalunos', {
                nome: cadastroNome.current.value,
                matricula: cadastroMatricula.current.value,
                email: cadastroEmail.current.value,
                senha: cadastroSenha.current.value,
            });
            cadastroNome.current.value = '';
            cadastroMatricula.current.value = '';
            cadastroEmail.current.value = '';
            cadastroSenha.current.value = '';
            mostrarMensagem('Aluno cadastrado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao cadastrar aluno');
        }
    }

    async function atualizarAluno() {
        try {
            await api.put('/atualizaalun', {
                id: editarId.current.value,
                nome: editarNome.current.value,
                email: editarEmail.current.value,
                senha: editarSenha.current.value,
            });
            editarId.current.value = '';
            editarNome.current.value = '';
            editarEmail.current.value = '';
            editarSenha.current.value = '';
            mostrarMensagem('Aluno atualizado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao atualizar aluno');
        }
    }

    async function deletarAluno() {
        try {
            await api.post('/deletaluno', {
                id: deletarId.current.value,
            });
            deletarId.current.value = '';
            mostrarMensagem('Aluno deletado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao deletar aluno');
        }
    }

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Alunos</p><h1>Manipular Alunos</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {resposta && <p className="status-message" role="status" aria-live="polite" aria-atomic="true">{resposta}</p>}
            <section className="page-panel" aria-labelledby="cadastrar-aluno">
                <h2 id="cadastrar-aluno">Cadastrar aluno</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); cadastrarAluno(); }}>
                    <div className="input-field"><label htmlFor="aluno-nome">Nome completo</label><input id="aluno-nome" ref={cadastroNome} type="text" autoComplete="name" required /></div>
                    <div className="input-field"><label htmlFor="aluno-matricula">Matrícula</label><input id="aluno-matricula" ref={cadastroMatricula} type="text" required /></div>
                    <div className="input-field"><label htmlFor="aluno-email">E-mail</label><input id="aluno-email" ref={cadastroEmail} type="email" autoComplete="email" required /></div>
                    <div className="input-field"><label htmlFor="aluno-senha">Senha</label><input id="aluno-senha" ref={cadastroSenha} type="password" autoComplete="new-password" required /></div>
                    <button className="btn" type="submit">Cadastrar aluno</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="atualizar-aluno">
                <h2 id="atualizar-aluno">Atualizar aluno</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); atualizarAluno(); }}>
                    <div className="input-field"><label htmlFor="aluno-editar-id">ID do aluno</label><input id="aluno-editar-id" ref={editarId} type="number" required /></div>
                    <div className="input-field"><label htmlFor="aluno-editar-nome">Novo nome</label><input id="aluno-editar-nome" ref={editarNome} type="text" autoComplete="name" /></div>
                    <div className="input-field"><label htmlFor="aluno-editar-email">Novo e-mail</label><input id="aluno-editar-email" ref={editarEmail} type="email" autoComplete="email" /></div>
                    <div className="input-field"><label htmlFor="aluno-editar-senha">Nova senha</label><input id="aluno-editar-senha" ref={editarSenha} type="password" autoComplete="new-password" /></div>
                    <button className="btn" type="submit">Atualizar aluno</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="deletar-aluno">
                <h2 id="deletar-aluno">Deletar aluno</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); deletarAluno(); }}>
                    <div className="input-field"><label htmlFor="aluno-deletar-id">ID do aluno</label><input id="aluno-deletar-id" ref={deletarId} type="number" required /></div>
                    <button className="btn" type="submit">Deletar aluno</button>
                </form>
            </section>
        </main>
    );
}

export default ManipularAlunos;
