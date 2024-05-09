import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Trainer from './pages/Trainer';
import Pokemon from './pages/Pokemon';
import Trade from './pages/Trade';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useSelector } from 'react-redux';

function App() {


  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
