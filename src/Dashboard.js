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
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/metrics_input?metric_id=1', {
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

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      <Header color={"#018069"} />
      <div className='main'>
        <SubMenu color={"white"} />
        <React.StrictMode>
          <LineChart data={dataInput} />
        </React.StrictMode>
      </div>      
    </div>
  );
};

export default Dashboard;
