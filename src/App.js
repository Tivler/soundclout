import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Index from './pages/Index';
import Products from './pages/Products';
import Community from './pages/Community';

class App extends React.Component {

  render () {
    return (
        <Router>
            <Route exact path="/" component={Index} />
            <Route exact path="/albums" component={Products} />
            <Route exact path="/community" component={Community} />
        </Router>
    );
  }
}

export default App;
