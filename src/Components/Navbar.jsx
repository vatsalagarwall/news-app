// Navbar.js
import React from 'react';
import logotransparent from './logotransparent.png'

function Navbar({ currentLocation, currentDate, navigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
      <div>
          
          <h6 style={{ marginLeft: '10px' }}><img src='https://cdn-icons-png.flaticon.com/512/64/64113.png' style={{height:'15px', marginLeft:'10px'}}/> {currentLocation.city}</h6>
          
          <h6 style={{ marginLeft: '10px' }}><img src='https://w7.pngwing.com/pngs/162/843/png-transparent-computer-icons-calendar-date-others-miscellaneous-text-calendar.png' style={{height:'15px', marginLeft:'10px'}}/> {currentDate}</h6>
        </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1' }}>
        <img src={logotransparent} style={{ height: '70px', width: '70px', textAlign: 'center' }} alt="Logo" />
        <a className="navbar-brand" style={{ cursor: 'pointer', fontFamily: 'serif', marginLeft: '10px', fontSize: '35px' }} onClick={() => navigate("/")}>EchoNews</a>
      </div>
    </nav>
  );
}

export default Navbar;
