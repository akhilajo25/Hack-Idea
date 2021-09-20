import React, {useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BackgroundImage from '../assets/images/faq.svg'
import AddIdea from './AddIdea';
import Grid from '@material-ui/core/Grid';
import IdeaCard from './IdeaCard';
import { IconButton, Typography , Tooltip, Button} from '@material-ui/core';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HistoryIcon from '@mui/icons-material/History';
import UpdateIcon from '@mui/icons-material/Update';
import Footer from './Footer'
const IdeaDashboard = () =>{
    const [hf,setHF] = useState(false);
    const [sortCreatedUp, setsortCreatedUp] = useState(true);
    const [sortCreatedDown, setsortCreatedDown] = useState(false);
    const [sortVotesDown, setsortVotesDown] = useState(true);
    const [sortVotesUp, setsortVotesUp] = useState(false);
    const handleSort = () =>{
        setHF(false)
        setsortCreatedUp(!sortCreatedUp);
        setsortCreatedDown(!sortCreatedDown);
    }
    const handleFilter = () =>{
        setHF(!hf)
        setsortVotesDown(!sortVotesDown);
        setsortVotesUp(!sortVotesUp);
    }
   
    const classes = useStyles();
    return (
        <Grid>
            <Paper className={classes.paperContainer}>
                <AddIdea/>
                <Grid item className={classes.listFilters}>
                    <Tooltip title="Sort by date" aria-label="add">
                        <IconButton>
                            {sortCreatedUp ? <UpdateIcon onClick={handleSort} style={{ fontSize: 30, fontWeight:'bold'}}/>:
                            <HistoryIcon onClick={handleSort} style={{ fontSize: 30, fontWeight:'bold'}} /> 
                            }
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Sort by votes" aria-label="add">
                        <IconButton>
                            {sortVotesUp ?
                            <ArrowUpwardIcon onClick={handleFilter} style={{ fontSize: 30, fontWeight:'bold'}} /> :
                            <ArrowDownwardIcon onClick={handleFilter} style={{ fontSize: 30, fontWeight:'bold'}} /> 
                            }
                        </IconButton>
                    </Tooltip>
                </Grid>
                <IdeaCard 
                sortCreatedUp={sortCreatedUp} 
                sortCreatedDown={sortCreatedDown} 
                hf={hf}
                sortVotesUp={sortVotesUp} 
                sortVotesDown={sortVotesDown} 
                />
            </Paper>
            <Footer/>
        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    paperContainer:{
        backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.1))`,
        minHeight:'100vh',
        backgroundSize:'100% 100%',
        padding:'20px',
        backgroundColor: 'currentcolor',
        '-webkit-background-size': 'cover'
        // ,url(${BackgroundImage})
    },

    listFilters:{
        display:'flex',
        // justifyContent:'flex-end',
        paddingLeft: '10%'
    }
}))
export default IdeaDashboard;