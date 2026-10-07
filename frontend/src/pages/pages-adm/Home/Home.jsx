import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const atalhos = [
  {
    categoria: 'Editais',
    titulo: 'Gerenciar editais',
    descricao: 'Cadastre, atualize ou remova oportunidades.',
    caminho: '/manipular-editais',
  },
  {
    categoria: 'Editais',
    titulo: 'Ver editais',
    descricao: 'Consulte editais e suas cargas horárias.',
    caminho: '/ver-editais',
  },
  {
    categoria: 'Alunos',
    titulo: 'Cadastrar alunos',
    descricao: 'Registre novos alunos no sistema.',
    caminho: '/manipular-alunos',
  },
  {
    categoria: 'Alunos',
    titulo: 'Ver cadastro de alunos',
    descricao: 'Consulte matrículas e dados cadastrados.',
    caminho: '/ver-alunos',
  },
  {
    categoria: 'Professores',
    titulo: 'Cadastrar professores',
    descricao: 'Gerencie os dados da equipe docente.',
    caminho: '/manipular-professores',
  },
  {
    categoria: 'Professores',
    titulo: 'Ver cadastro de professores',
    descricao: 'Consulte os professores cadastrados.',
    caminho: '/ver-professores',
  },
  {
    categoria: 'Associações',
    titulo: 'Cadastrar associação',
    descricao: 'Vincule um aluno, professor e edital.',
    caminho: '/manipular-intermediaria',
  },
  {
    categoria: 'Associações',
    titulo: 'Ver associações',
    descricao: 'Consulte os vínculos registrados.',
    caminho: '/ver-intermediaria',
  },
  {
    categoria: 'Horários',
    titulo: 'Gerenciar tempos',
    descricao: 'Cadastre, atualize ou remova horários.',
    caminho: '/manipular-tempo',
  },
];

function Home() {
  useEffect(() => {
    document.title = 'Início | Lumix';
  }, []);

  return (
    <main className="home-page">
      <header className="home-topbar">
        <Link className="home-brand" to="/" aria-label="Lumix, página inicial">
          <span className="home-brand-mark" aria-hidden="true">L</span>
          <span><strong>LUMIX</strong><small>GESTÃO ACADÊMICA</small></span>
        </Link>
        <p>Painel administrativo</p>
      </header>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Seu espaço de gestão</p>
          <h1 id="home-title">Bem-vindo à página inicial!</h1>
          <p>Acesse cadastros, editais e associações em um só lugar.</p>
          <Link className="home-primary-link" to="/manipular-editais">
            Começar pelos editais <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="home-overview" aria-label="Resumo das opções disponíveis">
          <div><strong>05</strong><span>áreas de gestão</span></div>
          <div><strong>09</strong><span>atalhos disponíveis</span></div>
        </div>
      </section>
      <section className="home-shortcuts" aria-labelledby="shortcuts-title">
        <header className="home-section-heading">
          <div>
            <p className="home-eyebrow">Navegação</p>
            <h2 id="shortcuts-title">Atalhos de gestão</h2>
          </div>
          <p>Escolha uma ação para abrir a área correspondente.</p>
        </header>
        <nav aria-label="Atalhos de gestão" className="home-nav">
          <ul>
            {atalhos.map((atalho) => (
              <li key={atalho.caminho} class="z-depth-1">
                <Link to={atalho.caminho}>
                  <span className="home-nav-category">{atalho.categoria}</span>
                  <span className="home-nav-title">{atalho.titulo}</span>
                  <span className="home-nav-description">{atalho.descricao}</span>
                  <span className="home-nav-arrow" aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
      </nav>
      </section>
    </main>
  );
}

export default Home;