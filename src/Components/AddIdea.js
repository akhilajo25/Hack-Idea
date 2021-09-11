import React from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography , Tooltip, Button} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIdeaForm from './AddIdeaForm';

const AddIdea = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return(
        <Grid container className={classes.root}>
            <Typography variant="h3">Hack Ideas</Typography>
            <Tooltip title="Have an Idea?" aria-label="add">
                <IconButton onClick={handleClickOpen} style={{float:'right'}}>
                    <AddIcon style={{ fontSize: 40}} />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" align="center">Let's Hear it!</DialogTitle>
        <AddIdeaForm/>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
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