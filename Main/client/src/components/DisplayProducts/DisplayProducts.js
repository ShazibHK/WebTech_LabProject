import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { fetchProducts} from '../../actions/products';
import DisplayProduct from './DisplayProduct/DisplayProduct';
import { createTransaction,fetchTransactions } from '../../actions/transactions';
import useStyles from './styles';

const DisplayProducts = ({setCurrentId}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts(),products);
  }, [ dispatch]);

  const classes = useStyles();

  return (
    <div>
    { !products.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {products.map((product) => (
             <>
    { (product.submit==="false") ?null : <Grid key={product._id} item xs={12} sm={6} md={3}>
            <DisplayProduct product={product} setCurrentId={setCurrentId} />
          </Grid>} 
          </>
             
        ))}
      </Grid>
    )}
    </div>
  );
};

export default DisplayProducts;
