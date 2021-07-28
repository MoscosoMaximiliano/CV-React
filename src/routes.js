import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AboutMe, Aptitudes, Knowledge, Portfolio, Experiences, Contact } from './pages'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/aptitudes" component={Aptitudes} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default Routes;