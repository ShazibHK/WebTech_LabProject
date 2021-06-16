import React, { useState, useEffect } from 'react';
import { Button, Paper,Container, Grid, Box, MenuItem } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createProduct, updateProduct } from '../../actions/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = ({ currentId, setCurrentId,subId,setSubId}) => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const userid=user.result._id;
  console.log(userid);
  const [postData, setPostData] = useState({ productname:'',price:'',quantity:'',total:'',comission:'',  selectedFile: ''   });
  console.log({postData})
  const product = useSelector((state) => (currentId ? state.products.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if (product) setPostData(product);
  }, [product]);

  const clear = () => {
    setCurrentId(0);
    setSubId(0);
    setPostData({ productname:'',price:'',quantity:'',total:'',comission:'',  selectedFile: ''  });
  };

  
  const notifySucess = () => toast("Congratulations! Product Added");
  const notifySucessUpdate= () => toast("Product details updated");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      postData.total=postData.price*postData.quantity;
      dispatch(createProduct({ ...postData, uid: user?.result?._id}));
      clear();
      notifySucess();
    } 

    else {

      dispatch(updateProduct(currentId, { ...postData, uid: user?.result?._id }));
      clear();
      notifySucessUpdate();
      
    }
  };
 

  return (
    <Container>
    <div style={{ width: '100%',marginTop:"7%"}}>
      <Paper className={classes.paper}>
        <ValidatorForm autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={1} xs={12} sm={12} md={12}>
                  
            <Grid container item xs={6} sm={6} md={3} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="productname"
                  variant="outlined"
                  label="product name"
                  value={postData.productname}
                  onChange={(e) => setPostData({ ...postData, productname: e.target.value })}
                  validators={['required', 'matchRegexp:^[a-zA-Z0-9]{3,20}$']}
                  errorMessages={['Product-Name cannot be empty', 'Should be atleast 2 character']}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={6} sm={6} md={3} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="price"
                  variant="outlined"
                  label="Product Price"
                  value={postData.price}
                  onChange={(e) => setPostData({ ...postData, price: e.target.value })}
                  validators={['required', 'matchRegexp:^[0-9]{1,10}$']}
                  errorMessages={['Price cannot be empty','Only numeric value accepted',]}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={6} sm={6} md={3} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="quantity"
                  variant="outlined"
                  label="Product Quantity"
                  value={postData.quantity}
                  onChange={(e) => setPostData({ ...postData, quantity: e.target.value })}
                  validators={['required', 'matchRegexp:^[0-9]{1,10}$']}
                  errorMessages={['Quantity cannot be empty','Only numeric value accepted',]}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={6} sm={6} md={3} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="comission"
                  variant="outlined"
                  label="Comission "
                  value={postData.comission}
                  onChange={(e) => setPostData({ ...postData, comission: e.target.value })}
                  validators={['required', 'matchRegexp:^[0-9.]{1,10}$']}
                  errorMessages={['Comission cannot be empty','Only floating value accepted',]}
                  required
                />
              </Box>
            </Grid>
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        
          </Grid>
          <Grid style={{ marginTop: '7px' }} container xs={12} sm={12} md={12} spacing={1}>
            <Button style={{ width: '15.5%', marginLeft: '0.8%', marginRight: '1%', marginTop: '1%' }} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            <Button style={{ width: '15.5%',marginTop: '1%' }} variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
          </Grid>
        </ValidatorForm>
      </Paper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover  
      />
    </div>
    </Container>
  );
};
export default AddProduct;