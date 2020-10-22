import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Portfolio from './components/Menu';
import ContactForm from './components/Contact';
import Resume from './components/Custom';
import Footer from './components/Footer';

function App() {
  const [navSelected, setNavSelected] = useState('about');

  const renderPage = () => {

    switch (navSelected) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Navigation
        navSelected={navSelected}
        setNavSelected={setNavSelected}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />

    </div>
  );
}

export default App;
