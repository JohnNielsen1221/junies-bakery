import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import ContactForm from './components/Contact';
import Custom from './components/Custom';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <div>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/custom" component={Custom} />
            <Route exact path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
