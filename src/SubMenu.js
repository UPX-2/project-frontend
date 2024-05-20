import React, { useState } from 'react';

const SubMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick = (option) => {
    // Aqui você pode implementar a lógica para o clique em uma opção do submenu
    console.log(`Opção ${option} clicada`);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* Botão na esquerda */}
      <button className='button' style={{ marginRight: 'auto' }}>Criar nova meta</button>
      
      {/* Submenu */}
      <div style={{ position: 'relative', width: 'auto' }}>
        <button className='button' onClick={toggleSubMenu}>Último mês <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M288-600v-72h528v72H288Zm0 156v-72h528v72H288Zm0 156v-72h528v72H288ZM180-600q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-636q0 14-10.35 25T180-600Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-480q0 14-10.35 25T180-444Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-324q0 14-10.35 25T180-288Z"/></svg></button>
        {isOpen && (
          <div style={{ position: 'absolute', top: '100%', right: 0 }}>
            <button className='OptionButton' onClick={() => handleOptionClick('Opção 1')}>Opção 1</button>
            <button className='OptionButton' onClick={() => handleOptionClick('Opção 2')}>Opção 2</button>
          </div>
        )}
      </div>
      
      {/* Submenu */}
      <div style={{ position: 'relative', width: 'auto' }}>
        <button className='button' onClick={toggleSubMenu2}>Nome da meta <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M288-600v-72h528v72H288Zm0 156v-72h528v72H288Zm0 156v-72h528v72H288ZM180-600q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-636q0 14-10.35 25T180-600Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-480q0 14-10.35 25T180-444Zm0 156q-14 0-25-11t-11-25.5q0-14.5 11-25t25.5-10.5q14.5 0 25 10.35T216-324q0 14-10.35 25T180-288Z"/></svg></button>
        {isOpen2 && (
          <div style={{ position: 'absolute', top: '100%', left: 5 }}>
            <button  className='OptionButton' onClick={() => handleOptionClick('Opção 1')}>Meta 1</button>
            <button  className='OptionButton' onClick={() => handleOptionClick('Opção 2')}>Meta 2</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
