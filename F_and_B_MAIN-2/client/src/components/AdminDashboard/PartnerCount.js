import React, { useState, useEffect } from 'react';
import { getDeals } from '../../actions/deals';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function PartnerCount(prop){

    const dispatch = useDispatch();
    const [count,setCount]=useState(0);
    useEffect(() => {
      dispatch(getDeals());
    }, [dispatch]);
  
    const deals = useSelector((state) => state.deals);
    console.log()
   return(
      <>
       {!prop.length?deals.length:deals.length}
       </>
   ); 
  
}
export default PartnerCount;
