import React, { useState, useEffect } from 'react';
import { getDeals } from '../../actions/deals';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function PartnerCount(){

    const dispatch = useDispatch();
    const [count,setCount]=useState(0);
    useEffect(() => {
      dispatch(getDeals());
    }, []);
  
    const deals = useSelector((state) => state.deals);
    console.log(deals.length)
   return(
     
       <div>
       
       </div>
   ); 
  
}
export default PartnerCount;
