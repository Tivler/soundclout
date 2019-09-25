import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Index from './pages/Index';
import Products from './pages/Products';
import Contact from './pages/Contact';

class App extends React.Component {

  render () {
    return (
        <Router>
            <Route exact path="/" component={Index} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacts" component={Contact} />
        </Router>
    );
  }
}

export default App;
