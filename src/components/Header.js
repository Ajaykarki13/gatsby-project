import React from 'react';

function Header() {
  const navbarStyle = {
    display: 'flex',
    justifyContent:'space-around',
    border: '1px solid black', 
    padding: '15px', 
  };

  return (
    <div className='navbar' style={navbarStyle}>
        <div className='right'>Density</div>
        <div className='left' style={{display:'flex',  justifyContent:'space-around',}}>
        <span>Career</span>
      <span>Blogs</span>
      <span>LeaderBoard</span>
      <span>Fees</span>
      <button type="button">Trade</button>
        </div>
      
    </div>
  );
}

export default Header;
