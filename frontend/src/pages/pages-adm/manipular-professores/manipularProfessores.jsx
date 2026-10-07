import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './manipularProfessores.css';

function ManipularProfessores() {
    useEffect(() => {
        document.title = 'Manipular professores | Lumix';
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

    async function cadastrarProfessor() {
        try {
            await api.post('/cadprof', {
                nome: cadastroNome.current.value,
                matricula: cadastroMatricula.current.value,
                email: cadastroEmail.current.value,
                senha: cadastroSenha.current.value,
            });
            cadastroNome.current.value = '';
            cadastroMatricula.current.value = '';
            cadastroEmail.current.value = '';
            cadastroSenha.current.value = '';
            mostrarMensagem('Professor cadastrado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao cadastrar professor');
        }
    }

    async function atualizarProfessor() {
        try {
            await api.put('/atualizaprof', {
                id: editarId.current.value,
                nome: editarNome.current.value,
                email: editarEmail.current.value,
                senha: editarSenha.current.value,
            });
            editarId.current.value = '';
            editarNome.current.value = '';
            editarEmail.current.value = '';
            editarSenha.current.value = '';
            mostrarMensagem('Professor atualizado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao atualizar professor');
        }
    }

    async function deletarProfessor() {
        try {
            await api.post('/deletprof', {
                id: deletarId.current.value,
            });
            deletarId.current.value = '';
            mostrarMensagem('Professor deletado com sucesso');
        } catch (error) {
            console.error(error);
            mostrarMensagem('Erro ao deletar professor');
        }
    }

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Equipe</p><h1>Manipular Professores</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {resposta && <p className="status-message" role="status" aria-live="polite" aria-atomic="true">{resposta}</p>}
            <section className="page-panel" aria-labelledby="cadastrar-professor">
                <h2 id="cadastrar-professor">Cadastrar professor</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); cadastrarProfessor(); }}>
                    <div className="input-field"><label htmlFor="professor-nome">Nome completo</label><input id="professor-nome" ref={cadastroNome} type="text" autoComplete="name" required /></div>
                    <div className="input-field"><label htmlFor="professor-matricula">Matrícula</label><input id="professor-matricula" ref={cadastroMatricula} type="text" required /></div>
                    <div className="input-field"><label htmlFor="professor-email">E-mail</label><input id="professor-email" ref={cadastroEmail} type="email" autoComplete="email" required /></div>
                    <div className="input-field"><label htmlFor="professor-senha">Senha</label><input id="professor-senha" ref={cadastroSenha} type="password" autoComplete="new-password" required /></div>
                    <button className="btn" type="submit">Cadastrar professor</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="atualizar-professor">
                <h2 id="atualizar-professor">Atualizar professor</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); atualizarProfessor(); }}>
                    <div className="input-field"><label htmlFor="professor-editar-id">ID do professor</label><input id="professor-editar-id" ref={editarId} type="number" required /></div>
                    <div className="input-field"><label htmlFor="professor-editar-nome">Novo nome</label><input id="professor-editar-nome" ref={editarNome} type="text" autoComplete="name" /></div>
                    <div className="input-field"><label htmlFor="professor-editar-email">Novo e-mail</label><input id="professor-editar-email" ref={editarEmail} type="email" autoComplete="email" /></div>
                    <div className="input-field"><label htmlFor="professor-editar-senha">Nova senha</label><input id="professor-editar-senha" ref={editarSenha} type="password" autoComplete="new-password" /></div>
                    <button className="btn" type="submit">Atualizar professor</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="deletar-professor">
                <h2 id="deletar-professor">Deletar professor</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); deletarProfessor(); }}>
                    <div className="input-field"><label htmlFor="professor-deletar-id">ID do professor</label><input id="professor-deletar-id" ref={deletarId} type="number" required /></div>
                    <button className="btn" type="submit">Deletar professor</button>
                </form>
            </section>
        </main>
    );
}

export default ManipularProfessores;
