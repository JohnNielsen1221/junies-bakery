import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
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
      <Nav
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
