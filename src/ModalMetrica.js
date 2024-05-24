import React from 'react';
import Cookies from 'js-cookie';

const ModalMetrica = ({ isActive, onClose }) => {
  const storedToken = Cookies.get('token');

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "metric_name": document.getElementById("field1").value, "unit_measurement": document.getElementById("field2").value, "access_token": storedToken }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      alert('Métrica Criada!');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCadastro()
    onClose();
  };

  return (
    isActive && (
      <div className="modal-overlay">
        <div className="modal-content">
            <button className="close-button" onClick={onClose}>X</button>
            
            <form onSubmit={handleSubmit}>
                <p id="subtitle">Criar nova métrica</p>
                <input type="text" id="field1" name="field1" placeholder='Nome da métrica' required />
                <input type="text" id="field2" name="field2" placeholder='Unidade de medida' required />
                <button type="submit">Enviar</button>
            </form>
        </div>
      </div>
    )
  );
};

export default ModalMetrica;
