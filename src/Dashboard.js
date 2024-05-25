import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import SubMenu from './SubMenu';
import LineChart from './LineChart';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const { token, setToken } = useContext(AuthContext);
  const [dataInput, setDataInput] = useState(null);
  const [userMetrics, setUserMetrics] = useState([]);
  const [selectedMetricData, setSelectedMetricData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = Cookies.get('token');
    if (!storedToken) {
      navigate('/login');
    } else {
      setToken(storedToken);
    }
  }, [navigate, setToken]);

  useEffect(() => {
    const fetchData = async (metricId) => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/metrics_input?metric_id=${metricId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao obter dados do usuário');
        }

        const data = await response.json();
        setDataInput(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchUserMetrics = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/metrics', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao obter métricas do usuário');
        }

        const userMetricsData = await response.json();
        setUserMetrics(userMetricsData);

        // Se houver métricas disponíveis, carrega os dados da primeira métrica
        if (userMetricsData.length > 0) {
          fetchData(userMetricsData[0].id);
          setSelectedMetricData(userMetricsData[0]);
          handleMetricClick(userMetricsData[0].id)
          Cookies.set('activeMetric', userMetricsData[0].id);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (token) {
      fetchUserMetrics();
    }
  }, [token]);

  const handleMetricClick = async (metricId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/metrics_input?metric_id=${metricId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao obter dados da métrica');
      }

      const data = await response.json();
      setSelectedMetricData(data);
      Cookies.set('activeMetric', metricId);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Header color={"#018069"} />
      <div className='main'>
        <SubMenu color={"white"} userMetrics={userMetrics} handleMetricClick={handleMetricClick} />
        <React.StrictMode>
          <LineChart data={selectedMetricData} />
        </React.StrictMode>
      </div>      
    </div>
  );
};

export default Dashboard;
