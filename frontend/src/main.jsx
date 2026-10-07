import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'

import Home from './pages/pages-adm/Home/Home.jsx'
import ManipularEditais from './pages/pages-adm/manipularEditais/manipularEditais.jsx'
import VerEditais from './pages/pages-adm/verEditais/verEditais.jsx'
import ManipularAlunos from './pages/pages-adm/manipular-alunos/manipularAlunos.jsx'
import VerAlunos from './pages/pages-adm/verAlunos/verAlunos.jsx'
import ManipularProfessores from './pages/pages-adm/manipular-professores/manipularProfessores.jsx'
import VerProfessores from './pages/pages-adm/verProfessores/verProfessores.jsx'
import ManipularIntermediaria from './pages/pages-adm/manipular-intermediaria/manipularIntermediaria.jsx'
import VerIntermediaria from './pages/pages-adm/ver-intermediaria/verIntermediaria.jsx'
import ManipularTempo from './pages/pages-adm/manipular-tempo/manipularTempo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manipular-editais" element={<ManipularEditais />} />
        <Route path="/ver-editais" element={<VerEditais />} />
        <Route path='/manipular-alunos' element={<ManipularAlunos />} />
        <Route path='/ver-alunos' element={<VerAlunos />} />
        <Route path='/manipular-professores' element={<ManipularProfessores />} />
        <Route path='/ver-professores' element={<VerProfessores />} />
        <Route path='/manipular-intermediaria' element={<ManipularIntermediaria />} />
        <Route path='/ver-intermediaria' element={<VerIntermediaria />} />
        <Route path='/manipular-tempo' element={<ManipularTempo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
