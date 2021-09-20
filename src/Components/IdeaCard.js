import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Grid, IconButton}  from '@material-ui/core'; 
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card, Typography} from '@material-ui/core';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Vote from './Vote';

const IdeaCard = (props) =>{
  console.log(props);
    const classes = useStyles();
    const [results, setResults] = useState([]);
    const [thumbsUpArray, setThumbsUpArray] = useState([]);
    const [loadComponent,setLoadComponent] = useState(false)
    const [colorOfThumbsUp, setColorOfThumbsUp] = useState(0)
    var votesDict = {};
    let q = ''; 
    var loggedInUser = localStorage.getItem('user')
    const names = ['Bruce', 'Clark', 'Diana'];
    const handleVote  =(e, id, title)=>{
      e.stopPropagation();
      // console.log(id)
      const vote={"votes":0}
      axios.patch('http://127.0.0.1:8000/idea/'+id,vote)
        .then(response => {
          setTimeout(function() {
          localStorage.setItem(id , JSON.stringify(title));
          setLoadComponent(true)
          setColorOfThumbsUp(id)
        }, 500);
    }
        )
        .catch(error => {
            console.log(error.response)
         });    
    }
    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleString()
    }
    useEffect(() => {
      if(!props.hf){
      props.sortCreatedUp ? q = '?order=desc' : q= '?order=asc';}
      else{
      props.sortVotesUp ? q='?order=vdesc' : q='?order=vasc'}
      axios.get('http://127.0.0.1:8000/idea/list/'+q).then(res => {
        setResults(res.data);
        setLoadComponent(false);
     });
    }, [loadComponent,props.sortCreatedDown,props.sortCreatedUp, props.hf, props.sortVotesUp, props.sortVotesDown])
  
    const renderedResults = results.map((result)=> {
      let currentArray = JSON.parse(localStorage.getItem(result.id))
      const colorCondition = result.title == currentArray;
      return(
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          > 
          <Grid container className={classes.flexContainer}>
            <Grid item className={classes.ideaDetails}>
              <Grid className={classes.upvotes}>
                <IconButton 
                onClick={(e)=>{handleVote(e, result.id, result.title)}}
                >
                  <Vote colorCondition={colorCondition}/>
                </IconButton>
                {result.votes}
              </Grid>
              <Grid item className={classes.ideaAttributes}>
                  <Typography className={classes.heading}>{result.title}</Typography>
                  <Grid>
                  <Grid>
                  <Typography variant="body1" className={classes.tags}>
                      {result.tags ? result.tags :''}</Typography>
                      </Grid>
              </Grid>
              </Grid>
            </Grid>
            <Grid>
            <Typography className={classes.ideaCreator}>{result.createdby}</Typography>
                  <Typography className={classes.ideaCreated}>{formatDate(result.created)}</Typography> 
                  
              </Grid> 
              </Grid>
          </AccordionSummary>
          <AccordionDetails>
          <Grid item className={classes.upvoteArrow}>
            <Typography>
            {result.description}
            </Typography>
          </Grid>
          </AccordionDetails>
      </Accordion>
      )
  })
    return (
        <div className={classes.root}>
          {renderedResults}
        </div>
      );
    }
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin:'auto'
       
      },
      heading: {
        fontSize: '21px',
        // fontWeight: theme.typography.fontWeightBold,
        alignSelf: 'center'
      },
      ideaDetails:{
        // width: '-webkit-fill-available',
        display:'flex'
      },
      upvoteArrow:{
        display:'flex',
        // alignItems:'center',
        justifyContent:'space-around'
      },
      ideaAttributes:{
        display: 'grid',
        justifyContent: 'space-between',
        paddingTop:'10px',
        alignSelf: 'end'
      },
      upvotes:{
        display: 'grid',
    justifyItems: 'center',
      },
      tags:{
        paddingTop:'10px'
      },
      isVoted:{
        color:"orange"
      },
      isNotVoted:{
        color:'gray'
      },
      flexContainer:{
        justifyContent:'space-between',
        alignItems:'flex-end',

      },
      ideaCreator:{
        fontSize:'12px',
        color:'grey'
      },
      ideaCreated:{
        fontSize:'10px',
        color:'grey'
      }

}))

export default IdeaCard;