import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const obterUltimos6Meses = () => {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const hoje = new Date();
    const ultimos6Meses = [];
  
    for (let i = 5; i >= 0; i--) {
      const mes = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
      ultimos6Meses.push(meses[mes.getMonth()]);
    }
  
    return ultimos6Meses;
  };

  const labels = obterUltimos6Meses();

  // Dados do gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Registros da sua meta',
        data: data,
        borderColor: 'rgba(0, 106, 87, 1)',
        backgroundColor: 'rgba(0, 106, 87, 0.8)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
