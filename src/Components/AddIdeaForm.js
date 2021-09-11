import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
const AddIdeaForm = () =>{
    return(
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                fullWidth
            />
            <TextField
            id="standard-multiline-static"
            label="Description"
            rows={4}
            fullWidth
            />

            <TextField
            id="standard-multiline-static"
            label="Tags"
            rows={4}
            fullWidth
            />

        </DialogContent>
    )
}
export default AddIdeaForm;