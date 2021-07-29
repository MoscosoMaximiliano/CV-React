import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { AboutMe, Portfolio, Contact } from './pages'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
}

export default Routes;