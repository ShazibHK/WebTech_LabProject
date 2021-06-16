import React from 'react';
import { Card,Divider,CardActions, CardContent, CardMedia, Button, Typography,Grid, Box, } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { tradeSubmission } from '../../../actions/tradeSubmission';
import {deleteProduct, fetchProducts,updateProductSubmission } from '../../../actions/products';
import useStyles from './styles';

const Product = ({ product, setCurrentId,setSubId}) => {
  const dispatch = useDispatch();
 const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(product)
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.name} />
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(product.createdAt).fromNow()}</Typography>
      </div>

      {(user?.result?._id === product?.uid && product?.submit === "false") && (
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(product._id)} style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <CardContent>
      
        <h3 style={{marginBottom:'4px'}}>Product Name: {product.productname}</h3>
        <Typography variant="body2"><b>Date:</b> {product.createdAt}</Typography>
        <Typography variant="body2"><b>Quantity:</b> {product.quantity}</Typography>
        <Typography variant="body2"><b>Price:</b> {product.price}</Typography>
        <Typography variant="body2"><b>Total: ₹</b> {product.total}</Typography>
        <Typography variant="body2"><b>Commission: </b> {product.comission}%</Typography>
        <Typography variant="body2"><b>status: </b><i>{product.status}</i> </Typography>
      
        
      </CardContent>
      <Grid style={{ marginTop: '7px' }} container xs={12} sm={12} md={12} spacing={1}>
            {(product?.submit=="false") && (
            <Button style={{ width: '47%', marginLeft: '4%', marginRight: '1%', marginTop: '1%',height:'30px' }} variant="contained" color="primary"  onClick={()=>{dispatch(tradeSubmission(product._id,"Product details submitted"));window.location.reload(false);}} >Submit</Button>
            )}
            {(user?.result?._id === product?.uid && product?.submit=="false") && (
            <Button style={{ width: '47%',marginTop: '1%',height:'30px' }} variant="contained" color="secondary" onClick={() => dispatch(deleteProduct(product._id))}>Delete</Button>
            )}
          </Grid>
      <Grid>


      </Grid>
       <br></br><br></br>
    </Card>
  );
};

export default Product;
