import React from 'react';
import {SecondaryNavBar, Footer, SideBar} from './components'
import {ThemeProvider} from 'styled-components'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {/* <SideBar /> */}
        <SecondaryNavBar />
        <Routes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
