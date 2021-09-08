import React from 'react';
import ReactDom from 'react-dom';
import LandingPage from './Components/LandingPage'


const App = () =>{
    return(
        <div className="container">
            <LandingPage/>
        </div>
    )
}
ReactDom.render(
<App/>,
document.querySelector('#root')
);