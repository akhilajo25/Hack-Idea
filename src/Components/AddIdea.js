import React from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography , Tooltip} from '@material-ui/core';

const AddIdea = () => {
    const classes = useStyles();
    const handleOnClick = () =>{
        console.log("Clicked!!!")
        axios.get('http://127.0.0.1:8000/idea/2').then(res => {
            // Handle Your response here.
            // Likely you may want to set some state
            console.log(res);
         });
    }
    return(
        <Grid container className={classes.root}>
            <Typography variant="h3">Hack Ideas</Typography>
            <Tooltip title="Have an Idea?" aria-label="add">
                <IconButton onClick={handleOnClick} style={{float:'right'}}>
                    <AddIcon style={{ fontSize: 40}} />
                </IconButton>
            </Tooltip>
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'space-around',  
      padding:'30px',
    },
  }));
export default AddIdea;