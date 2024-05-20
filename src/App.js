import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import Dashboard from './Dashboard';

const App = () => {
  const [token, setToken] = useState('abc');

  useEffect(() => {
    // Simulando uma requisição assíncrona para obter o token
    const fetchToken = async () => {
      try {
        
      } catch (error) {
        console.error('Erro ao obter token:', error);
      }
    };

    fetchToken();
  }, []); // UseEffect vazio para garantir que seja executado apenas uma vez na montagem

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard token={token} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
