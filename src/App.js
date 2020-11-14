import React from 'react'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'

import './App.css';
import Header from './Components/Header'
import About from './pages/About';
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
