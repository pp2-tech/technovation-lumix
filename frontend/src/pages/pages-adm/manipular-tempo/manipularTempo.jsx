import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

function ManipularTempo() {
    const [resposta, setResposta] = useState('');
    const cadastroAssociacao = useRef();
    const cadastroInicio = useRef();
    const cadastroFim = useRef();
    const editarId = useRef();
    const editarInicio = useRef();
    const editarFim = useRef();
    const deletarId = useRef();

    useEffect(() => {
        document.title = 'Gerenciar tempos | Lumix';
    }, []);

    async function cadastrarTempo() {
        try {
            await api.post('/tempoCadastro', {
                id_inter: cadastroAssociacao.current.value,
                hora_inicio: cadastroInicio.current.value,
                hora_final: cadastroFim.current.value,
            });
            cadastroAssociacao.current.value = '';
            cadastroInicio.current.value = '';
            cadastroFim.current.value = '';
            setResposta('Tempo cadastrado com sucesso.');
        } catch (error) {
            console.error('Erro ao cadastrar tempo:', error);
            setResposta('Não foi possível cadastrar o tempo. Tente novamente.');
        }
    }

    async function atualizarTempo() {
        try {
            await api.put('/atualizarTempo', {
                id: editarId.current.value,
                hora_inicio: editarInicio.current.value,
                hora_final: editarFim.current.value,
            });
            editarId.current.value = '';
            editarInicio.current.value = '';
            editarFim.current.value = '';
            setResposta('Tempo atualizado com sucesso.');
        } catch (error) {
            console.error('Erro ao atualizar tempo:', error);
            setResposta('Não foi possível atualizar o tempo. Tente novamente.');
        }
    }

    async function deletarTempo() {
        try {
            await api.post('/deletarTempo', { id: deletarId.current.value });
            deletarId.current.value = '';
            setResposta('Tempo removido com sucesso.');
        } catch (error) {
            console.error('Erro ao deletar tempo:', error);
            setResposta('Não foi possível remover o tempo. Tente novamente.');
        }
    }

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Horários</p><h1>Manipular Tempo</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {resposta && <p className="status-message" role="status" aria-live="polite" aria-atomic="true">{resposta}</p>}
            <section className="page-panel" aria-labelledby="cadastrar-tempo">
                <h2 id="cadastrar-tempo">Cadastrar tempo</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); cadastrarTempo(); }}>
                    <div className="input-field"><label htmlFor="tempo-associacao">ID da associação</label><input id="tempo-associacao" ref={cadastroAssociacao} type="number" min="1" required /></div>
                    <div className="input-field"><label htmlFor="tempo-inicio">Data e hora de início</label><input id="tempo-inicio" ref={cadastroInicio} type="datetime-local" required /></div>
                    <div className="input-field"><label htmlFor="tempo-fim">Data e hora de término</label><input id="tempo-fim" ref={cadastroFim} type="datetime-local" required /></div>
                    <button className="btn" type="submit">Cadastrar tempo</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="atualizar-tempo">
                <h2 id="atualizar-tempo">Atualizar tempo</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); atualizarTempo(); }}>
                    <div className="input-field"><label htmlFor="tempo-editar-id">ID do registro</label><input id="tempo-editar-id" ref={editarId} type="number" min="1" required /></div>
                    <div className="input-field"><label htmlFor="tempo-editar-inicio">Nova data e hora de início</label><input id="tempo-editar-inicio" ref={editarInicio} type="datetime-local" required /></div>
                    <div className="input-field"><label htmlFor="tempo-editar-fim">Nova data e hora de término</label><input id="tempo-editar-fim" ref={editarFim} type="datetime-local" required /></div>
                    <button className="btn" type="submit">Atualizar tempo</button>
                </form>
            </section>
            <section className="page-panel" aria-labelledby="deletar-tempo">
                <h2 id="deletar-tempo">Deletar tempo</h2>
                <form className="form-stack" onSubmit={(event) => { event.preventDefault(); deletarTempo(); }}>
                    <div className="input-field"><label htmlFor="tempo-deletar-id">ID do registro</label><input id="tempo-deletar-id" ref={deletarId} type="number" min="1" required /></div>
                    <button className="btn" type="submit">Deletar tempo</button>
                </form>
            </section>
        </main>
    );
}

export default ManipularTempo;