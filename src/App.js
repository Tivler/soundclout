import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import albums from './albums';
import featured from  './featured';

import Navbar from './components/core/Navbar/Navbar'
import Footer from './components/core/Footer/Footer'

import Index from './pages/Index';
import Products from './pages/Products';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums,
      featured,
    }  
  };

  render () {
    return (
        <Router>
            <Navbar />
            <Route exact path="/" component={Index} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacts" component={Contact} />
            <Footer />
        </Router>
    );
  }
}

export default App;
