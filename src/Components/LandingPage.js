import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Logo from "../assets/images/download.png";
import LoginComponent from './LoginComponent';
import IntroductionComponent from './IntroductionComponent';

const LandingPage = () =>{
    const classes = useStyles();
    return(
        <div className="classes.root" >
            {/* <img style={{width: '15%'}} src={Logo}/> */}
            <Grid 
            container
            className={classes.holder}
            >
                <Grid item lg={8} xs={6}>
                    <IntroductionComponent/>    
                </Grid>
                <Grid item lg={4} xs={6}> 
                    <LoginComponent/>
                </Grid>

            </Grid>
        </div>
    )
}
export default LandingPage

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button:{
        backgroundColor:'blue'
    },
    holder:{
        margin:'20px',
    }
  }));