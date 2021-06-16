import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/products';
import Products from '../Products/Products';
import AddProduct from '../Form/AddProduct';

const ProductAndForm = () => {
  const [currentId, setCurrentId] = useState(0);
  const [subId, setSubId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [currentId,subId, dispatch]);

  return (
      <Container style={{backgroundImage:'url(${require(background)})'}}>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <AddProduct currentId={currentId} setCurrentId={setCurrentId} subId={subId} setSubId={setSubId}/>
          </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <Products setCurrentId={setCurrentId} setSubId={setSubId}/>
        </Grid>
        </Grid>
      </Container>
  );
};

export default ProductAndForm;
