import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BackgroundImage from '../assets/images/ideation.svg';
import AddIdea from './AddIdea';
import Grid from '@material-ui/core/Grid';
import IdeaCard from './IdeaCard';
const IdeaDashboard = () =>{
    const classes = useStyles();
    return (
        <Grid>
            <Paper className={classes.paperContainer}>
                <AddIdea/>
                <IdeaCard/>
            </Paper>
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    paperContainer:{
        backgroundImage: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(${BackgroundImage})`,
        height:'100vh',
        backgroundSize:'100% 100%',
        padding:'20px'
    },
}))
export default IdeaDashboard;