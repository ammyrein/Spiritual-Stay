import React, { useState } from 'react';

const VisitorForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    guests: '1',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace this with the actual WhatsApp number (e.g., 919876543210 for India)
    const whatsappNumber = "917905592517"; 
    
    const text = `Hari Om! I would like to inquire about a stay at Ananda Stay.%0A%0A*Name:* ${formData.name}%0A*Dates:* ${formData.dates}%0A*Guests:* ${formData.guests}%0A*Special Requests:* ${formData.message || 'None'}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    backgroundColor: '#fff'
  };

  return (
    <section id="book" className="section" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="section-title">Reserve Your Stay</h2>
        <p className="section-subtitle">Send us your details and we will connect with you via WhatsApp to confirm your spiritual retreat.</p>
        
        <form onSubmit={handleSubmit} className="glass" style={{
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
              <input type="text" name="name" required style={inputStyle} onChange={handleChange} placeholder="Your name" />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Expected Dates</label>
              <input type="text" name="dates" required style={inputStyle} onChange={handleChange} placeholder="E.g., 12 Oct - 15 Oct" />
            </div>
          </div>
          
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Number of Guests</label>
          <select name="guests" style={inputStyle} onChange={handleChange}>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4+">4+ People</option>
          </select>
          
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Special Requests (Optional)</label>
          <textarea name="message" rows={4} style={{...inputStyle, resize: 'vertical'}} onChange={handleChange} placeholder="Any dietary requirements or specific spiritual interests?"></textarea>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.2rem', marginTop: '10px' }}>
            Inquire via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default VisitorForm;
