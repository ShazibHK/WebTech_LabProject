import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from './styles';
import './ProposalAcceptance.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ProposalAcceptance from '../ProposalAcceptance/ProposalAcceptance.js'
import { deleteDeal } from '../../../actions/deals';
import Deals from '../Deals';

const Deal = ({ deal, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [isOpen,setIsOpen]= useState('false');
  const dispatch = useDispatch();
  console.log(deal?.dealAccept)
  return (
    <div >
    <Card className={classes.card} >
       <Grid container>
       <Grid item xs={12} md={5}>
      <Typography className="dataP" gutterBottom variant="h5" component="h2">Company: {deal.companyname}</Typography>
      <CardContent>
        <Typography variant="body2">{moment(deal.createdAt).fromNow()}</Typography>
      </CardContent>
      </Grid>
      <Grid item xs={12} md={7}>
      <Typography className="dataP" gutterBottom variant="h5" component="h2">Description: {deal.message.slice(0,10)}...</Typography>
      </Grid>
      </Grid>
      <Link 
        to={{
          pathname:'/ProposalAcceptance',
          aboutprops:{
            deal
          }
        }}
      >  
      <Button variant="inlined" color="primary"><b color="primary">Show more</b></Button>
      </Link>
    </Card>
    </div>
  );
};

export default Deal;
