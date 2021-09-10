import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './Components/LandingPage'
import Routes from './Routes';


const App = () =>{
    return(
        <Router>
        <div className="container">
            <Routes/>
        </div>
        </Router>
    )
}
ReactDom.render(
<App/>,
document.querySelector('#root')
);