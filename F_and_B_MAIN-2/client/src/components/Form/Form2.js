import React, { useState, useEffect } from 'react';
import { Button, Paper,Container, Grid, Box, MenuItem } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createDeal } from '../../actions/deals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const userid=user.result._id;
  console.log(userid);
  const [postData, setPostData] = useState({ companyname: '', contactnumber: '', productname: '', addess: '', zipcode: '', email: '', message: '', gstnum:'', state: '', dealAccept:'', uid: userid });
  console.log({postData})
  const [currentId, setCurrentId] = useState(0);
  const deal = useSelector((state) => state.deals);
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(() => {
    if (deal) setPostData(deal);
  }, [deal]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ companyname: '', contactnumber: '', productname: '', addess: '', zipcode: '', email: '',gstnum:'', message: '',gstnum:'', state: '', uid:userid });
  };

  
  const notifySucess = () => toast("Congratulations! Proposal sent");
  const notifyFailure = () => toast("Oops! couldn;t send your proposal");

  const handleSubmit = async (e) => {
    setPostData({ ...postData, uid: userid });
    e.preventDefault();
    if (currentId === 0) {
      
      dispatch(createDeal({ ...postData,uid: userid}));
      clear();
      notifySucess();
    } else {
      notifyFailure();
      clear();
    }
  };
  const states = [
    {
      value: 'Andhra Pardesh',
      label: 'Andhra Pardesh',
    },
    {
      value: 'Goa',
      label: 'Goa',
    },
    {
      value: 'Karnataka',
      label: 'Karnataka',
    },
    {
      value: 'Kerala',
      label: 'Kerala',
    },
    {
      value: 'Maharashtra',
      label: 'Maharashtra',
    },
    {
      value: 'Tamil Nadu',
      label: 'Tamil Nadu',
    },
    {
      value: 'Telangana',
      label: 'Telangana',
    },
  ];

  return (
    <Container className={classes.contain}>
    <div style={{ width: '100%',marginTop:"7%"}}>
      <Paper className={classes.paper}>
        <ValidatorForm autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={1} xs={12} sm={12} md={12}>
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="companyname"
                  variant="outlined"
                  label="company name"
                  value={postData.companyname}
                  onChange={(e) => setPostData({ ...postData, companyname: e.target.value})}
                  validators={['required', 'matchRegexp:^[a-zA-Z0-9.,;  ]{3,20}$']}
                  errorMessages={['Company-Name cannot be empty', 'Should be atleast 2 character']}
                  required
                />
              </Box>
            </Grid>
            <Grid item container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="contact number"
                  variant="outlined"
                  label="contact number"
                  value={postData.contactnumber}
                  onChange={(e) => setPostData({ ...postData, contactnumber: e.target.value })}
                  validators={['required', 'matchRegexp:^[0-9]{10}$']}
                  errorMessages={['Contact-Number cannot be empty ', 'enter 10 digit number']}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="productname"
                  variant="outlined"
                  label="product name"
                  value={postData.productname}
                  onChange={(e) => setPostData({ ...postData, productname: e.target.value })}
                  validators={['required', 'matchRegexp:^[a-zA-Z0-9 ]{3,20}$']}
                  errorMessages={['Company-Name cannot be empty', 'Should be atleast 2 character']}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="addess"
                  variant="outlined"
                  label="address"
                  value={postData.addess}
                  onChange={(e) => setPostData({ ...postData, addess: e.target.value })}
                  validators={['required', 'matchRegexp:^[a-zA-Z0-9 ]{10,}$']}
                  errorMessages={['Address cannot be empty', 'Should be atleast 10 character']}
                  reuired
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="zipcode"
                  variant="outlined"
                  label="zipcode"
                  value={postData.zipcode}
                  onChange={(e) => setPostData({ ...postData, zipcode: e.target.value })}
                  validators={['required', 'matchRegexp:^[0-9]{6}$']}
                  errorMessages={['Zip code cannot be empty ', 'enter valid zipcode']}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  size="small"
                  name="email"
                  variant="outlined"
                  label="email"
                  value={postData.email}
                  onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                  validators={['required', 'isEmail']}
                  errorMessages={['Email cannot be empty', 'enter valid email']}
                  required
                />
              </Box>
            </Grid>
           
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  fullWidth
                  select
                  size="small"
                  name="state"
                  variant="outlined"
                  label="state"
                  value={postData.state}
                  onChange={(e) => setPostData({ ...postData, state: e.target.value })}
                  validators={['required']}
                  errorMessages={['Select state']}
                  required
                >
                  {states.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextValidator>
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  name="gstnum"
                  variant="outlined"
                  label="GST number"
                  fullWidth
                  onChange={(e) => setPostData({ ...postData, gstnum: e.target.value })}
                  required
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={12} md={12} spacing={1}>
              <Box width="98%">
                <TextValidator
                  multiline
                  rows={2}
                  size="small"
                  name="message"
                  variant="outlined"
                  label="Description"
                  fullWidth
                  value={postData.message}
                  onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                  validators={['required', 'matchRegexp:^[a-zA-Z0-9.,;  ]{10,100}$']}
                  errorMessages={['Message cannot be empty', 'Should be atleast 10 character']}
                  required
                />
              </Box>
            </Grid>
          <Grid style={{ marginTop: '7px' }} container xs={12} sm={12} md={12} spacing={1}>
            <Button style={{ width: '22%', marginLeft: '0.5%', marginRight: '4%' }} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            <Button style={{ width: '22%' }} variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
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
export default Form;
