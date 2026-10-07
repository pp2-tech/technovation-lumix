import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from "../../../services/api.js";

function VerProfessores() {
    const [professores, setProfessores] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        document.title = 'Ver professores | Lumix';
        async function buscarProfessores() {
            try {
                const response = await api.get('/verProfessores');
                setProfessores(response.data);
            } catch (error) {
                console.error('Erro ao buscar professores:', error);
                setErro('Não foi possível carregar os professores. Tente novamente.');
            } finally {
                setCarregando(false);
            }
        }

        buscarProfessores();
    }, []);

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Equipe</p><h1>Professores cadastrados</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {erro && <p className="status-message" role="alert">{erro}</p>}
            {carregando && <p role="status" aria-live="polite">Carregando professores...</p>}
            {!carregando && !erro && professores.length === 0 && <p role="status">Nenhum professor cadastrado.</p>}
            <ul className="collection" aria-label="Professores cadastrados" aria-busy={carregando}>
                {professores.map((prof) => (
                    <li className="collection-item" key={prof.id}>
                        <strong>{prof.nome}</strong>
                        <p>Matrícula: {prof.matricula}</p>
                        <p>E-mail: {prof.email}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default VerProfessores;
