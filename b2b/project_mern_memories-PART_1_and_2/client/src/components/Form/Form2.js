import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createDeal } from '../../actions/deals';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ companyname: '', contactnumber: '', productname: '', addess: '', zipcode: '', email: '', message: '', state: '' });
  const deal = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    if (deal) setPostData(deal);
  }, [deal]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ companyname: '', contactnumber: '', productname: '', addess: '', zipcode: '', email: '', message: '', state: '' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createDeal(postData));
      clear();
    } else {
      clear();
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Paper className={classes.paper}>
        <ValidatorForm autoComplete="on" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={1} xs={12} sm={12} md={12}>
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <TextValidator
                style={{ width: 'auto' }}
                size="small"
                fullWidth
                name="companyname"
                variant="outlined"
                label="company name"
                value={postData.companyname}
                onChange={(e) => setPostData({ ...postData, companyname: e.target.value })}
                validators={['required', 'matchRegexp:^[0-9]{10}$']}
                errorMessages={['Company name cannot be empty', 'email is not valid']}
                required
              />
            </Grid>

            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField
                size="small"
                name="contact number"
                variant="outlined"
                label="contact number"
                fullWidth
                value={postData.contactnumber}
                onChange={(e) => setPostData({ ...postData, contactnumber: e.target.value })}
                required
              />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="productname" variant="outlined" label="product name" fullWidth value={postData.productname} onChange={(e) => setPostData({ ...postData, productname: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="addess" variant="outlined" label="addess" fullWidth value={postData.addess} onChange={(e) => setPostData({ ...postData, addess: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="zipcode" variant="outlined" label="zipcode" fullWidth value={postData.zipcode} onChange={(e) => setPostData({ ...postData, zipcode: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="email" variant="outlined" label="email" fullWidth value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} spacing={1}>
              <TextField size="small" name="state" variant="outlined" label="state" fullWidth value={postData.state} onChange={(e) => setPostData({ ...postData, state: e.target.value })} />
            </Grid>
            <Grid container item xs={12} sm={12} md={12} spacing={1}>
              <TextField size="small" multiline rows={3} name="description" variant="outlined" label="description" fullWidth value={postData.description} />
            </Grid>
          </Grid>
          <Grid style={{ marginTop: '7px' }} container xs={12} sm={12} md={12} spacing={1}>
            <Button style={{ width: '22%', marginLeft: '0.5%', marginRight: '4%' }} variant="contained" color="primary" size="large" type="submit">Submit</Button>
            <Button style={{ width: '22%' }} variant="contained" color="secondary" size="large" onClick={clear}>Clear</Button>
          </Grid>
        </ValidatorForm>
      </Paper>
    </div>
  );
};
export default Form;
