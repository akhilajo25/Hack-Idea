import React from 'react';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconButton, Typography , Tooltip, Button, Fab} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIdeaForm from './AddIdeaForm';
import BackgroundImage from '../assets/images/ideation.svg';
import CancelIcon from '@material-ui/icons/Cancel';
import ImportExportIcon from '@material-ui/icons/ImportExport';
const AddIdea = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };
    
    return(
        <Grid container className={classes.root}>
            <Grid className={classes.logoAndName}>
                <img style={{width: '7%'}} src={BackgroundImage}/>
                <Typography variant="h3" className={classes.appName}>Hack Ideas</Typography>
            </Grid>
            <Grid className ={classes.fabIcon}>
            <Tooltip title="Have an Idea?" aria-label="add">
                <Fab onClick={handleClickOpen} className={classes.addIcon} >
                    <AddIcon size="medium" color="primary"/>
                </Fab>
            </Tooltip>
            </Grid>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid className={classes.formHeaders}>
                    <DialogTitle id="form-dialog-title">Let's Hear it!</DialogTitle>
                    <IconButton onClick={handleClose} style={{float:'right'}}>
                            <CancelIcon style={{ fontSize: 40, fontWeight:'bold', color:'orange'}} />
                    </IconButton>
                </Grid>
                <AddIdeaForm onClose={handleClose}/>
            </Dialog>
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'grid',
    //   justifyContent: 'space-around',  
    //   padding:'10px 30px',
    },
    logoAndName:{
        display: 'flex',
        alignItems:'baseline',
        paddingLeft: '2rem',
        paddingTop: '1.2em',
    },
    appName:{
        paddingLeft:'17px',
        fontFamily: 'Changa One, cursive',
        fontSize:'70px'
    },
    formHeaders:{
        marginTop:'10px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    addIcon:{
        alignSelf: 'center',
        backgroundColor: 'orange',
    },
    fabIcon:{
        display: 'grid',
        justifyContent: 'flex-end',
        paddingRight:'10%'
    }
  }));
export default AddIdea;