// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      setToken(data.token);
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='Login'>
      <img src={'./assets/images/logo.svg'} alt='logo' />
      <div className='form_login'>
        <p id="title_login">Login</p>
        <p id="subtitle_login">Acesse através de seu login e senha.</p>
        <input type="text" placeholder="Nome de Usuário" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>ENTRAR</button>
        <div className='links_login'>
          <a href=''>Cadastre-se</a>
          <a href=''>Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
