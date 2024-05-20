// Dashboard.js
// import React, { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import SubMenu from './SubMenu';

const Dashboard = ({ token }) => {
  // const [userData, setUserData] = useState(null);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:5000/user-data', {
  //         method: 'GET',
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error('Erro ao obter dados do usuário');
  //       }

  //       const data = await response.json();
  //       setUserData(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  //   fetchData();
  // }, [token]); // Este efeito só deve ser executado quando o token mudar
  

  return (
    <div>
      <Header color={"white"} />
      <div className='main'>
        <SubMenu color={"white"} />
      </div>      
    </div>
  );
};

export default Dashboard;
