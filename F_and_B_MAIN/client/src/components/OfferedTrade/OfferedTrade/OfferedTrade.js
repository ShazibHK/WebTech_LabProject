import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Button, Typography,Grid, Box, } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { tradeSubmission } from '../../../actions/tradeSubmission';
import { updateTransaction,fetchTransactions } from '../../../actions/transactions';

import useStyles from './styles';

const OfferedTrade = ({ product, setCurrentId,setSubId}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  
  return (
    <div>
    {product.status===""?null:<Card className={classes.card}>
     
     <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.name} />
     <div className={classes.overlay}>
       <Typography variant="body2">{moment(product.createdAt).fromNow()}</Typography>
     </div>

     <CardContent>
       <h3 style={{marginBottom:'4px'}}>Product Name: {product.productname}</h3>
       <Typography variant="body2"><b>Date:</b> {product.createdAt}</Typography>
       <Typography variant="body2"><b>Quantity:</b> {product.quantity}</Typography>
       <Typography variant="body2"><b>Price:</b> {product.price}</Typography>
       <Typography variant="body2"><b>Total: ₹</b> {product.total}</Typography>
       <Typography variant="body2"><b>Commission: </b> {product.comission}%</Typography>
       <Typography variant="body2"><b>status: </b><i>{product.status}</i> </Typography>
       {((product.status==="Approved for sale")||(product.status==="Approval Declined"))?null:<> <Button style={{ width: '47%', marginRight: '1%', marginTop: '1%',height:'30px' }} variant="contained" color="primary"  onClick={()=>{dispatch(tradeSubmission(product._id,"Approved for sale"));
       
       dispatch(updateTransaction("60c662bea27bec0968e9ad5e","accepted","1"));
       dispatch(updateTransaction("60c662bea27bec0968e9ad5e","number",product.quantity));window.location.reload(false);}} >Accept</Button>
       <Button style={{ width: '47%',marginTop: '1%',height:'30px' }} variant="contained" color="secondary" onClick={()=>{dispatch(tradeSubmission(product._id,"Approval Declined"));dispatch(updateTransaction("60c662bea27bec0968e9ad5e","rejected","1"));window.location.reload(false);}}>Decline</Button>
       </>}
     </CardContent>
   </Card>
   }
    
  </div>
  );
};
export default OfferedTrade;
