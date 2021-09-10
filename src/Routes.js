import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import LandingPage from './Components/LandingPage';
import IdeaDashboard from './Components/IdeaDashboard';
const Routes = () =>{
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/dashboard" component={IdeaDashboard} />
            </Switch>
        </Router>
    )
}

export default Routes;