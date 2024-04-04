import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trainer from './pages/Trainer';
import Pokemon from './pages/Pokemon';
import Trade from './pages/Trade';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/trade" element={<Trade></Trade>} />
      </Routes>
    </Router>
  );
}

export default App;
