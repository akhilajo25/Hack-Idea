import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddIdea from '../assets/images/addIdea.svg';
import {makeStyles} from '@material-ui/core/styles';
const IntroductionComponent = () =>{
    const classes = useStyles();
    return(
        <Grid>
            <img src={AddIdea} className={classes.bannerImg} alt='banner-Img'/>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    bannerImg:{
        width:'100%',
        height:'100vh',
    }
}))

export default IntroductionComponent;