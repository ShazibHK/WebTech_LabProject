import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../../actions/transactions';
import { getDeals } from '../../actions/deals';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Analytic(prop){

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchTransactions());
    }, [dispatch]);
    const transactions = useSelector((state) => state.transactions);
    console.log(prop.rejected)
   return(
     
       <div>
      {prop.rejected==="rejected"?transactions.rejected:null}
      {prop.number==="number"?transactions.number:null}     
      {prop.accepted==="accepted"?transactions.accepted:null}       
       </div>
   ); 
  
}
export default Analytic;
