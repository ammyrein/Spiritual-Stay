import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(/hero-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}></div>
      
      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '4rem', marginBottom: '20px', color: '#FDFBF7', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Find Your Inner Peace</h2>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          A sanctuary for the soul. Disconnect from the noise and reconnect with yourself in our serene spiritual retreat.
        </p>
        <a href="#book" className="btn-primary" style={{ fontSize: '1.2rem', padding: '15px 40px' }}>Begin Your Journey</a>
      </div>
    </section>
  );
};

export default Hero;
