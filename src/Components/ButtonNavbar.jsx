import React from 'react';

function ButtonNavbar({ navigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">Home</button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/india")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">India</button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/politics")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">Politics</button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/science")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">Science</button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/sports")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">Sports</button>
          </li>
          <li className="nav-item">
            <button type="button" onClick={() => navigate("/business")} style={{ cursor: 'pointer', padding: '20px' }} className="btn">Business</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default ButtonNavbar;
