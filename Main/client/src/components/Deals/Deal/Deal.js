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
  console.log(deal?.seen)
  return (
    <div >
    <Card className={classes.card} style={{ backgroundColor: "LemonChiffon",margin:"30px"}}  >
      <Grid container>
        <Grid item xs={12} md={5}>
          <Typography className="dataP" style={{ marginLeft:"30px" , marginTop:"15px", fontFamily:"Copperplate"  }} gutterBottom variant="h5" component="h2">CompanyName: {deal.companyname}</Typography>
          <CardContent>
            
            <Typography className="dataP" style={{ marginTop:"2px" ,marginLeft:"16px" ,fontFamily:"Copperplate"}} gutterBottom variant="h6" component="h2">Description: {deal.message.slice(0,10)}...</Typography>

            <Typography variant="body2" style={{ marginLeft:"16px" , marginTop:"25px"  }}>{moment(deal.createdAt).fromNow()}</Typography>
          </CardContent>
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
      <Button variant="inlined" color="primary" style={{ marginLeft :"15px", marginBottom:"6px"}}><b color="primary">Show more</b></Button>
      </Link>
    </Card>
    </div>
  );
};

export default Deal;
