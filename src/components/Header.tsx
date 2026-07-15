import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: '20px 0', transition: 'all 0.3s ease'
    }} className="glass">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', margin: 0 }}>Ananda Stay</h1>
        <nav>
          <a href="#about" style={{ margin: '0 15px', fontWeight: 500 }}>About</a>
          <a href="#features" style={{ margin: '0 15px', fontWeight: 500 }}>Experience</a>
          <a href="#book" className="btn-primary" style={{ marginLeft: '15px' }}>Book Now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
