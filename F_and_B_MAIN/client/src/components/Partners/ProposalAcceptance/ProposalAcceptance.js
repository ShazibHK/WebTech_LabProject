import React from 'react';
import { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import './ProposalAcceptance.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateNotification } from '../../../actions/notifications';
import { deleteDeal,updateDeal, } from '../../../actions/deals';

const ProposalAcceptance=(props)=>{
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  
  console.log(user?.result?._id);
  console.log(props.location.aboutprops.deal);
  
  useEffect(() => {
    dispatch(updateNotification(user.result._id));
  }, []);
    return(
            <div className="wrapperP">
            <Grid container>
            <Grid className="leftP" item xs={12} sm={12} md={4}>
            
            <div className="info_dataP">
                 <div className="dataP">
                      <h2 style={{color:'black'}}>Compnay Name</h2>
                      <br></br>
                      <ul><h4 >{props.location.aboutprops.deal.companyname}</h4></ul>
                   </div>
                  <br></br>
                 </div>
            
            </Grid>
            <Grid className="rightP" item xs={12} sm={12} md={8}>
            <div>
              <div className="infoP">
                <h3>Information</h3>
                  <div className="info_dataP">
                    <div className="dataP">
                      <h4>Email</h4>
                      <p>{props.location.aboutprops.deal.email}</p>
                   </div>
                 <div className="dataP">
                   <h4>Phone</h4>
                  <p>{props.location.aboutprops.deal.contactnumber}</p>
              </div>
              <div className="dataP">
                   <h4>Adress</h4>
                  <p>{props.location.aboutprops.deal.addess},{props.location.aboutprops.deal.zipcode},{props.location.aboutprops.deal.state}</p>
              </div>
            </div>
        </div>
      
      <div className="projectsP">
        <h3>Description</h3>
        <div className="projects_dataP">
          <div className="dataP">
            <h4></h4>
            <p>{props.location.aboutprops.deal.message}/</p>
          </div>
         
        </div>
      </div>
      
       <div>
      
       <Button 
        variant="contained"
        color="Secondary" 
        onClick={() =>{
       
      dispatch(updateDeal(props.location.aboutprops.deal._id));
       }}>
        Accept
      </Button>
       
      <Button variant="contained" color="primary"  onClick={() => dispatch(deleteDeal(props.location.aboutprops.deal._id))} >Decline</Button>
       </div>


  </div></Grid></Grid>
    </div>
    );
}

export default ProposalAcceptance;