// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [complete_name, setName] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, complete_name }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      const data = await response.json();

      if(data.return = "success"){
        alert("Usuário criado com sucesso")
        navigate('/login');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='Login'>
      <img src={'./assets/images/logo.svg'} alt='logo' />
      <div className='form_login'>
        <p id="title_login">Cadastre-se</p>
        <p id="subtitle_login"></p>
        <input type="text" placeholder="Nome Completo" value={complete_name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleCadastro}>CADASTRE-SE</button>
        <div className='links_login'>
          <a href='/login'>Já tem uma conta? Faça login</a>
          {/* <a href=''>Esqueceu sua senha?</a> */}
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
