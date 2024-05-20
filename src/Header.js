import React from 'react';

const Header = React.memo(({ color }) => {
  return (
    <div className="header">
      <div className="logo"><img src={'./assets/images/logo.svg'} alt='logo' /></div>
      <div className="user-circle" style={{ backgroundColor: color }}></div>
    </div>
  );
});

export default Header;
