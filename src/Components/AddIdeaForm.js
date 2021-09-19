import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
const AddIdeaForm = (props) =>{
    // console.log(props)
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const loggedInUser = localStorage.getItem('user')
    const handleSumbit=()=>{
    const idea = { title: title, description: description, tags: tags, createdby:loggedInUser};
    axios.post('http://127.0.0.1:8000/idea/list/', idea)
        .then(response => {
            // console.log(response)
        setTitle('')
        setDescription('')
        setTags('')
        props.onClose()
    }
        )
        .catch(error => {
            console.log(error.response)
         });    
    }

    return(
        <DialogContent>
            <form className={classes.root} noValidate autoComplete="off" className={classes.root}>
                <TextField
                    autoFocus
                    id="title"
                    label="Title"
                    fullWidth
                    className={classes.inputTextField}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <TextField
                id="description"
                label="Description"
                rows={40}
                fullWidth
                className={classes.inputTextField}
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                />

                <TextField
                id="tags"
                label="Tags"
                rows={4}
                fullWidth
                className={classes.inputTextField}
                value={tags}
                onChange={e => setTags(e.target.value)}
                required
                />
                <DialogActions>
                    <Button onClick={handleSumbit} color="primary" className={classes.submitButton}>
                        Add
                    </Button>
                </DialogActions>
            </form>
        </DialogContent>

    )
}
const useStyles = makeStyles((theme) => ({
    root:{
        margin:'5px'
    },
    inputTextField:{
        marginTop:'15px'
    },
    submitButton:{
        margin:'5px'
    }
}))
export default AddIdeaForm;