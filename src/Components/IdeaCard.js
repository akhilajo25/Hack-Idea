import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Grid}  from '@material-ui/core'; 
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Card, Typography} from '@material-ui/core';
const IdeaCard = () =>{
    const classes = useStyles();
    const [results, setResults] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/idea/list/').then(res => {
        setResults(res.data);
     });
    }, [])
    console.log(results)
    const renderedResults = results.map((result)=> {
      return(
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{result.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {result.description}
            </Typography>
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
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightBold,
      },
}))

export default IdeaCard;