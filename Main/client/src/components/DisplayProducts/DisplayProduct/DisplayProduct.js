import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Button, Typography,Grid, Box, } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import moment from 'moment';
import { tradeSubmission } from '../../../actions/tradeSubmission';
import { updateTransaction,fetchTransactions } from '../../../actions/transactions';

import useStyles from './styles';

const DisplayProduct = ({ product, setCurrentId,setSubId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  
  return (
    <div>
    {product.status===""?null:<Card className={classes.card}>
     
     <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.name} />

     <CardContent>
       <h3 style={{marginBottom:'4px'}}>Product Name: {product.productname}</h3>
       <Typography variant="body2"><b>Pcs Available:</b> {product.quantity}</Typography>
       <Typography variant="body2"><b>Price:</b> {product.price}</Typography>
       <br></br>
       <Link 
        to={{
          pathname:'/Order',
          aboutprops:{
            product
          }
        }}
      >  
      <Button variant="inlined" color="primary" variant="outlined"><b color="primary">Proceed to buy</b></Button>
      </Link>
     </CardContent> 
   </Card>
   }
    
  </div>
  );
};
export default DisplayProduct;
