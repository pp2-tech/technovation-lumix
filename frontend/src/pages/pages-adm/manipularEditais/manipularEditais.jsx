import api from '../../../services/api';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './manipular.css';

function CadastrarEditais() {

    useEffect(() => {
        document.title = 'Gerenciar editais | Lumix';
    }, []);

    const [resposta, setResposta] = useState("");
    const cadastroId = useRef();
    const cadastroNome = useRef();
    const cadastroDescricao = useRef();
    const cadastroCargaMinima = useRef();

    const editarId = useRef();
    const editarNome = useRef();
    const editarDescricao = useRef();
    const editarCargaMinima = useRef();

    const deletarId = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);

            setTimeout(() => {
                setResposta("");
            }, 3000); 
    }


    async function cadastrarEdital() {
        try {
            await api.post('/cadastrarEditais', {
                id: cadastroId.current.value,
                nome: cadastroNome.current.value,
                descricao: cadastroDescricao.current.value,
                carga_minima: cadastroCargaMinima.current.value
            });

            cadastroId.current.value = "";
            cadastroNome.current.value = "";
            cadastroDescricao.current.value = "";
            cadastroCargaMinima.current.value = "";

            mostrarMensagem("Edital cadastrado com sucesso");
        } catch (error) {
            console.error('Erro ao cadastrar edital:', error);
            mostrarMensagem("Erro ao cadastrar edital");
        }
    }

    async function atualizarEdital() {
        try {
            await api.put('/atualizarEditais', {
                id: editarId.current.value,
                nome: editarNome.current.value,
                descricao: editarDescricao.current.value,
                carga_minima: editarCargaMinima.current.value
            });

            editarId.current.value = "";
            editarNome.current.value = "";
            editarDescricao.current.value = "";
            editarCargaMinima.current.value = "";

            mostrarMensagem("Edital atualizado com sucesso");
        } catch (error) {
            console.error('Erro ao atualizar edital:', error);
            mostrarMensagem("Erro ao atualizar edital");
        }
    }

    async function deletarEdital() {
        try {
            await api.post('/deletarEditais', {
                id: deletarId.current.value
            });

            deletarId.current.value = "";
            mostrarMensagem("Edital deletado com sucesso");
        } catch (error) {
            console.error('Erro ao deletar edital:', error);
            mostrarMensagem("Erro ao deletar edital");
        }
    }


    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Editais</p><h1>Gerenciar Editais</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {resposta && <p className="status-message" role="status" aria-live="polite" aria-atomic="true">{resposta}</p>}
            <nav aria-label="Seções de gerenciamento de editais" className="page-nav">
                <ul>
                    <li><a href="#cadastrar">Cadastrar</a></li>
                    <li><a href="#editar">Editar</a></li>
                    <li><a href="#deletar">Deletar</a></li>
                </ul>
            </nav>
            <section className="page-panel" id="cadastrar" aria-labelledby="cadastrar-edital">
                <h2 id="cadastrar-edital">Cadastrar edital</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); cadastrarEdital(); }}>
                    <div className="input-field"><label htmlFor="edital-novo-id">ID do edital</label><input id="edital-novo-id" type="number" min="1" ref={cadastroId} required /></div>
                    <div className="input-field"><label htmlFor="edital-novo-nome">Nome</label><input id="edital-novo-nome" type="text" ref={cadastroNome} required /></div>
                    <div className="input-field"><label htmlFor="edital-nova-descricao">Descrição</label><textarea id="edital-nova-descricao" className="materialize-textarea" ref={cadastroDescricao} required /></div>
                    <div className="input-field"><label htmlFor="edital-nova-carga">Carga horária mínima</label><input id="edital-nova-carga" type="number" min="0" ref={cadastroCargaMinima} required /></div>
                    <button className="btn" type="submit">Cadastrar edital</button>
                </form>
            </section>
            <section className="page-panel" id="editar" aria-labelledby="editar-edital">
                <h2 id="editar-edital">Editar edital</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); atualizarEdital(); }}>
                    <div className="input-field"><label htmlFor="edital-editar-id">ID do edital</label><input id="edital-editar-id" type="number" min="1" ref={editarId} required /></div>
                    <div className="input-field"><label htmlFor="edital-editar-nome">Novo nome</label><input id="edital-editar-nome" type="text" ref={editarNome} /></div>
                    <div className="input-field"><label htmlFor="edital-editar-descricao">Nova descrição</label><textarea id="edital-editar-descricao" className="materialize-textarea" ref={editarDescricao} /></div>
                    <div className="input-field"><label htmlFor="edital-editar-carga">Nova carga horária mínima</label><input id="edital-editar-carga" type="number" min="0" ref={editarCargaMinima} /></div>
                    <button className="btn" type="submit">Atualizar edital</button>
                </form>
            </section>
            <section className="page-panel" id="deletar" aria-labelledby="deletar-edital">
                <h2 id="deletar-edital">Deletar edital</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); deletarEdital(); }}>
                    <div className="input-field"><label htmlFor="edital-deletar-id">ID do edital</label><input id="edital-deletar-id" type="number" min="1" ref={deletarId} required /></div>
                    <button className="btn" type="submit">Deletar edital</button>
                </form>
            </section>
        </main>
    );
}

export default CadastrarEditais;