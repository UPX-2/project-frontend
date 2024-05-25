import React from 'react';
import Cookies from 'js-cookie';

const ModalEntrada = ({ isActive, onClose, MetricId }) => {
  const storedToken = Cookies.get('token');
  const activeMetric = Cookies.get('activeMetric');

  const handleCadastro = async () => {
    console.log(activeMetric)
    try {
      const response = await fetch('http://127.0.0.1:5000/metrics_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "input_value": document.getElementById("field1").value, "metric_id": activeMetric, "access_token": storedToken }),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

    //   alert('Entrada Criada!');
      window.location.reload();
    } catch (error) {
    //   alert(error.message);
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
                <p id="subtitle">Criar nova entrada para sua métrica</p>
                <input type="text" id="field1" name="field1" placeholder='Novo valor' required />
                <button type="submit">Enviar</button>
            </form>
        </div>
      </div>
    )
  );
};

export default ModalEntrada;
