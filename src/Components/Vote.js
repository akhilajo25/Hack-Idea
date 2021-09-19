import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Vote = (props) =>{
    let votesArray = JSON.parse(localStorage.getItem('votesTracker'));
    // console.log(votesArray);
    return(
        <div>
            <ThumbUpIcon style={{ color: props.colorCondition ? "orange":"gray" }}/>
        </div>
    )
}
export default Vote;