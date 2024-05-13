// Dashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = ({ token }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/user-data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao obter dados do usuário');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Dashboard - Área Protegida!</h2>
      {userData && (
        <div>
          <p>Nome: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
