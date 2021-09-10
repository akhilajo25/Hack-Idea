import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography , Tooltip} from '@material-ui/core';
const AddIdea = () => {
    const classes = useStyles();
    const handleOnClick = () =>{
        console.log("Clicked!!!")
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