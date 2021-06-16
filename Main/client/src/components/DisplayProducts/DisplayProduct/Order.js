import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Button, Typography,Grid, Box,Paper } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import decode from 'jwt-decode';
import { createOrder } from '../../../actions/orders';
import moment from 'moment';
import { tradeSubmission } from '../../../actions/tradeSubmission';
import { updateTransaction,fetchTransactions } from '../../../actions/transactions';

import useStyles from './styles';

const Order = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const orders = useSelector((state) => state.orders);
  const [income,setIncome]=useState(0);
  const [postData, setPostData] =
   useState({ 
       productName:'',
       price:'',
       quantity:'',
       total:'',
       address:'' ,
       contactNumber:'',
       uid:user?.result._id,
       name:user?.result.name,
       email:user?.result.email,
        });

    useEffect(() => {
            if (orders) setPostData(orders);
          }, [orders]);

    const clear = () => {
       setPostData({ quantity:'',contactNumber:''});
    };
console.log(props.number)
    const handleSubmit = async (e) => {
        console.log(props);
        setPostData({ ...postData,
             uid: user?.result._id,
             productName:props.location.aboutprops.product.productname,
             price:props.location.aboutprops.product.price,
             uid:user?.result._id,
             name:user?.result.name,
             email:user?.result.email,
        });
        e.preventDefault();
        dispatch(createOrder({ ...postData,uid: user?.result._id,
            productName:props.location.aboutprops.product.productname,
            price:props.location.aboutprops.product.price,
            uid:user?.result._id,
            name:user?.result.name,
            email:user?.result.email,}));
            console.log(postData.quantity)
        setIncome(parseInt(props.location.aboutprops.product.comission)*parseInt(props.location.aboutprops.product.price));
        dispatch(updateTransaction("60c662bea27bec0968e9ad5e","deduct",postData.quantity));
        dispatch(updateTransaction("60c662bea27bec0968e9ad5e","sales",(parseInt(postData.quantity)*parseInt(props.location.aboutprops.product.price))));
        dispatch(updateTransaction("60c662bea27bec0968e9ad5e","income",props.location.aboutprops.product.price));
        clear();
    };
    
  
  return (
    <div >
 
    <div style={{ width: '100%',marginTop:"7%"}}>
    <Paper className={classes.paper}>
        <Grid container md={12} xs={12} spacing={3}>
            <Grid item md={4} xs={4} >
                <Typography variant="body2">Product Name:{props.location.aboutprops.product.productname}</Typography>
            </Grid>
           
            <Grid item md={4} xs={4}>
                <Typography variant="body2">Price: {props.location.aboutprops.product.price}</Typography>
            </Grid>
 
            <Grid item md={4} xs={4}>
                <Typography variant="body2">Available pieces: {props.location.aboutprops.product.quantity}</Typography>
            </Grid>
        </Grid>
    </Paper>
      <Paper className={classes.paper}>
        <ValidatorForm autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={1} xs={12} sm={12} md={12}>
           
            <Grid container item xs={12} sm={12} md={4} lg={4} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="Quantity"
                  variant="outlined"
                  label="Quantity"
                  value={postData.quantity}
                  onChange={(e) => setPostData({ ...postData, quantity: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            
            <Grid container item xs={12} sm={12} md={4} lg={4} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="Contact Number"
                  variant="outlined"
                  label="Contact Number"
                  value={postData.contactNumber}
                  onChange={(e) => setPostData({ ...postData, contactNumber: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={4} lg={4} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="Address"
                  variant="outlined"
                  label="address"
                  value={postData.address}
                  onChange={(e) => setPostData({ ...postData, address: e.target.value})}
                  required
                />
              </Box>
            </Grid>
         
       </Grid>
          <Grid style={{ marginTop: '7px' }} container xs={12} sm={12} md={12} spacing={1}>
            <Button style={{ width: '22%', marginLeft: '0.5%', marginRight: '4%' }} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            <Button style={{ width: '22%' }} variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
          </Grid>
        </ValidatorForm>
      </Paper>
      
    </div>
  </div>
  );
};
export default Order;
