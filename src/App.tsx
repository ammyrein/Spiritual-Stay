import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VisitorForm from './components/VisitorForm';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <VisitorForm />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
};

export default App;
