import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Height } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Developer from '../assets/images/developer.svg';

const LoginComponent = () =>{
    const classes = useStyles();
    return(
        <Grid container className={classes.loginGrid} direction="column">
            <Paper elevation={10} className={classes.paperContainer} >
                <Grid align='center'>
                <Avatar className={classes.avatarColor}><LockOutlinedIcon/></Avatar>
                <h3>Log In</h3>
                </Grid>
                <form>
                    <TextField id="outlined-basic" label="employee ID" variant="outlined" autoFocus/>
                </form>
                <Button className={classes.loginButton} variant="contained" color="primary" fullWidth> login </Button>
            </Paper>
            {/* <img className={classes.devImg} src={Developer}/> */}
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
   paperContainer:{
       padding:'20px',
       margin:'20px auto',
       height:'30vh' 
   },
   loginGrid:{
       justifyContent:'center',
   },
   avatarColor:{
       backgroundColor:'orange',
   },
   loginButton:{
       backgroundColor:'orange',
       marginTop:'15px'
   },
   devImg:{
       width:50,
       height:50,
   }
  }));
export default LoginComponent