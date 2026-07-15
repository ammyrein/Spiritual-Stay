import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: '#FDFBF7', padding: '60px 0 20px', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '2rem' }}>Ananda Stay</h2>
        <p style={{ maxWidth: '500px', margin: '0 auto 30px', opacity: 0.8 }}>
          Discover peace, deepen your practice, and reconnect with nature in our spiritual sanctuary.
        </p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', opacity: 0.6, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Ananda Stay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
