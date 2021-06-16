import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { fetchProducts} from '../../actions/products';
import Product from './Product/Product';
import useStyles from './styles';

const Products = ({setCurrentId}) => {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts(),products);
    
  }, [ dispatch]);

  const classes = useStyles();

  return (
    !products.length ? <CircularProgress /> : (
      <Grid className={classes.contain} container alignItems="stretch"  spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4}>
            <Product product={product} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Products;
