import React, { useState, useEffect } from 'react';
import { Button, Paper,Container, Grid, Box, MenuItem } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createDeal } from '../../actions/deals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTransaction,fetchTransactions } from '../../actions/transactions';

const Form = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);
  const [postData, setPostData] = useState({ accepted:'',rejected:'',number:'',income:'',sales:'' });
  const transactions = useSelector((state) => state.transactions);

  const classes = useStyles();
  console.log(transactions)
  useEffect(() => {
    if (transactions) setPostData(transactions);
  }, [transactions]);

  const clear = () => {
    setPostData({ accepted:'',rejected:'',number:'',income:'',sales:'' });
  };

  
  const notifySucess = () => toast("Congratulations! Proposal sent");
  const notifyFailure = () => toast("Oops! couldn;t send your proposal");

  const handleSubmit = async (e) => {
    setPostData({ ...postData });
    e.preventDefault();
      dispatch(createTransaction({ ...postData}));
      clear();
      notifySucess();
    
  };
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
                  name="accepeted"
                  variant="outlined"
                  label="accepeted"
                  value={postData.accepeted}
                  onChange={(e) => setPostData({ ...postData, accepeted: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="rejected"
                  variant="outlined"
                  label="rejected"
                  value={postData.rejected}
                  onChange={(e) => setPostData({ ...postData, rejected: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="number"
                  variant="outlined"
                  label="number"
                  value={postData.number}
                  onChange={(e) => setPostData({ ...postData, number: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="income"
                  variant="outlined"
                  label="income"
                  value={postData.income}
                  onChange={(e) => setPostData({ ...postData, income: e.target.value})}
                  required
                />
              </Box>
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6} spacing={1}>
              <Box width="98%">
                <TextValidator
                  size="small"
                  fullWidth
                  name="sales"
                  variant="outlined"
                  label="sales"
                  value={postData.sales}
                  onChange={(e) => setPostData({ ...postData, sales: e.target.value})}
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
