import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';
import Trade from './pages/Trade';
import Trainer from './pages/Trainer';

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/Trainer"> Trainer</Link>
        </li>
        <li>
          <Link to="/Trade"> Trade</Link>
        </li>
        <li>
          <Link to="/Pokemon"> Pokemon</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Trade' element={<Trade />} />
        <Route path='/Pokemon' element={<Pokemon />} />
        <Route path='/Trainer' element={<Trainer />} />
      </Routes>
    </Router>
  );
}

export default App;
