import React from 'react';
import {SideBar} from './components'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <SideBar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
