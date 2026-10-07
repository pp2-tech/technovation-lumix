import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../../services/api.js";

function VerAlunos() {
    const [alunos, setAlunos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        document.title = 'Ver alunos | Lumix';
        async function buscarAlunos() {
            try {
                const response = await api.get('/verAlunos');
                setAlunos(response.data);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
                setErro('Não foi possível carregar os alunos. Tente novamente.');
            } finally {
                setCarregando(false);
            }
        }

        buscarAlunos();
    }, []);

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Alunos</p><h1>Alunos cadastrados</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {erro && <p className="status-message" role="alert">{erro}</p>}
            {carregando && <p role="status" aria-live="polite">Carregando alunos...</p>}
            {!carregando && !erro && alunos.length === 0 && <p role="status">Nenhum aluno cadastrado.</p>}
            <ul className="collection" aria-label="Alunos cadastrados" aria-busy={carregando}>
                {alunos.map((aluno) => (
                    <li className="collection-item" key={aluno.id}>
                        <strong>{aluno.nome}</strong>
                        <p>Matrícula: {aluno.matricula}</p>
                        <p>E-mail: {aluno.email}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default VerAlunos;
