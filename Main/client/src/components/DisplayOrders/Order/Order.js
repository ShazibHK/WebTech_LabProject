import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { updateTransaction,fetchTransactions } from '../../../actions/transactions';
import { updateOrder ,deleteOrder} from '../../../actions/orders';
import moment from 'moment';
import useStyles from './styles';
import './ProposalAcceptance.css';
import Deals from '../Orders';

const Order = ({ order }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  useEffect(() => {
    if (order) updateOrder(order);
  }, [order]);

  console.log(order._id)
  return (
    <div >
    <Card className={classes.card} >
       <Grid container>
       <Grid item xs={12} md={7}>
      <CardContent>
        <Typography className="dataP" gutterBottom variant="h5" component="h2">Product Name: {order.productName}</Typography>
        <Typography variant="body2"><b>Total Price: </b>{parseInt(order.quantity)*parseInt(order.price)}</Typography>
        <Typography variant="body2"><b>Quantity: </b>{order.quantity}</Typography>
        <Typography variant="body2"><b>Ordered Date: </b>{order.createdAt}</Typography>
        <Typography variant="body2"><b>Shipping Address: </b>{order.address}</Typography>
        <Typography variant="body2"><b>Reciever Name: </b>{order.name}</Typography>
        <Typography variant="body2"><b>Contact Number: </b>{order.contactNumber}</Typography>
        <Typography variant="body2"><b>Email: </b>{order.email}</Typography><br></br>
        {order.dispatch!=="dispatched"?<Button variant="outlined" onClick={()=>{ dispatch(deleteOrder(order._id));window.location.reload(false);}}>Accept & Dispatch</Button>:<Typography variant="body2"><b><i>Product is dispatched </i></b></Typography>}
      
      </CardContent>
      </Grid>
      <Grid item xs={12} md={5}>
      <Typography className="dataP" gutterBottom variant="h5" component="h2"></Typography>
      </Grid>
      </Grid>
  
    </Card>
    </div>
  );
};

export default Order;
