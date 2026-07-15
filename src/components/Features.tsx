import React from 'react';
import { Leaf, Wind, Sun } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wind size={48} color="var(--color-primary)" />,
      title: "Guided Meditation",
      description: "Join daily meditation sessions led by experienced masters to calm your mind and find clarity."
    },
    {
      icon: <Sun size={48} color="var(--color-primary)" />,
      title: "Yoga & Wellness",
      description: "Rejuvenate your body with morning yoga in our open-air studio surrounded by nature."
    },
    {
      icon: <Leaf size={48} color="var(--color-primary)" />,
      title: "Organic Sattvic Meals",
      description: "Nourish your soul with our farm-to-table vegetarian meals prepared with mindfulness and love."
    }
  ];

  return (
    <section id="features" className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="section-title">The Experience</h2>
        <p className="section-subtitle">Immerse yourself in practices that heal the body, mind, and spirit.</p>
        
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              flex: '1 1 300px',
              padding: '40px 30px',
              textAlign: 'center',
              backgroundColor: 'var(--color-background)',
              borderRadius: '20px',
              transition: 'transform 0.3s ease',
              cursor: 'default',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ marginBottom: '20px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{f.title}</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
