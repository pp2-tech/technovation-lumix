import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';
import './verIntermediaria.css';

function VerIntermediaria() {
    const [registros, setRegistros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        document.title = 'Ver associações | Lumix';
        async function buscarRegistros() {
            try {
                const response = await api.get('/verIntermediaria');
                setRegistros(response.data);
            } catch (error) {
                console.error('Erro ao buscar intermediária:', error);
                setErro('Não foi possível carregar as associações. Tente novamente.');
            } finally {
                setCarregando(false);
            }
        }

        buscarRegistros();
    }, []);

    return (
        <main className="admin-page">
            <header className="page-header">
                <div><p className="page-kicker">Lumix · Associações</p><h1>Associações cadastradas</h1></div>
                <Link className="btn btn-secondary" to="/">Página inicial</Link>
            </header>
            {erro && <p className="status-message" role="alert">{erro}</p>}
            {carregando && <p role="status" aria-live="polite">Carregando associações...</p>}
            {!carregando && !erro && registros.length === 0 && <p role="status">Nenhuma associação cadastrada.</p>}
            <ul className="collection" aria-label="Associações cadastradas" aria-busy={carregando}>
                {registros.map((registro) => {
                    const professor = registro.cadprof?.nome || registro.professores;
                    const aluno = registro.cadaluno?.nome || registro.alunos;
                    const edital = registro.Editai?.nome || registro.Editais?.nome || registro.editais;
                    const carga_minima = registro.Editai?.carga_minima;

                    return (
                        <li className="collection-item" key={registro.id || `${registro.professores}-${registro.alunos}-${registro.editais}`}>
                            <p><strong>Professor:</strong> {professor}</p>
                            <p><strong>Aluno:</strong> {aluno}</p>
                            <p><strong>Edital:</strong> {edital}</p>
                            <p><strong>Carga horária mínima:</strong> {carga_minima}</p>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default VerIntermediaria;
