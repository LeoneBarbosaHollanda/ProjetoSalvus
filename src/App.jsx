import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Trainer from './pages/Trainer';
import "./styles/App.sass"
import Sidebar from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Renderize o componente Sidebar e passe as props necessárias */}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

        {/* Conteúdo principal da aplicação */}
        <div className="content">
          {/* Botão ou ícone para abrir a barra lateral */}
          <button onClick={toggleSidebar}>Toggle Sidebar</button>

          {/* Defina as rotas para os diferentes componentes */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Trade" element={<Trade />} />
            <Route path="/Pokemon" element={<Pokemon />} />
            <Route path="/Trainer" element={<Trainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
