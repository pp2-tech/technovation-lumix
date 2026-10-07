import api from '../../../services/api.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VerEditais() {
    const [edital, setEdital] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        document.title = 'Ver editais | Lumix';
        async function buscarEditais() {
            try {
                const response = await api.get('/verEditais');
                setEdital(response.data);
            } catch (error) {
                console.error('Erro ao buscar editais:', error);
                setErro('Não foi possível carregar os editais. Tente novamente.');
            } finally {
                setCarregando(false);
            }
        }

        buscarEditais();
    }, []);

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Editais</p><h1>Ver editais</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {erro && <p className="status-message" role="alert">{erro}</p>}
            {carregando && <p role="status" aria-live="polite">Carregando editais...</p>}
            {!carregando && !erro && edital.length === 0 && <p role="status">Nenhum edital cadastrado.</p>}
            <ul className="collection" aria-label="Editais cadastrados" aria-busy={carregando}>
                {edital.map((editais) => (
                    <li className="collection-item" key={editais.id}>
                        <strong>{editais.nome}</strong>
                        <p>Descrição: {editais.descricao}</p>
                        <p>Carga horária mínima: {editais.carga_minima}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default VerEditais;