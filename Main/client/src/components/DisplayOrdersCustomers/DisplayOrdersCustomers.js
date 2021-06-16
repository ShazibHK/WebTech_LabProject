import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../actions/orders';
import { getUsers } from '../../actions/auth';
import Order from './Order/Order';
import useStyles from './styles';

import decode from 'jwt-decode';
const DisplayOrdersCustomers = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    dispatch(getOrders());
  }, [ dispatch]);

  const orders = useSelector((state) => state.orders);
  console.log(orders)
  const classes = useStyles();
  return (
    <div>
   { !orders.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {orders.map((order) => (
            
          order.uid===user.result._id?<Grid key={order._id} item xs={12} sm={12} md={12}>
            <Order order={order}  />
          </Grid>:null
          
          
        ))}
      </Grid>
    
    )}
     

    </div>
  );
};

export default DisplayOrdersCustomers;
