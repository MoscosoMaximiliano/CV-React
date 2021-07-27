import logo from './logo.svg';

import React from 'react';
import './App.css';
import SideBar from './components/sideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Knowledge from './pages/Knowledge';
import Portfolio from './pages/Portfolio';
import Aptitudes from './pages/Aptitudes';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
      <SideBar />
        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/knowledge" component={Knowledge} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/aptitudes" component={Aptitudes} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
