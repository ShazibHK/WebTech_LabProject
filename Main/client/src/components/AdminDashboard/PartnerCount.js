import React, { useState, useEffect } from 'react';
import { getDeals } from '../../actions/deals';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getNotification } from '../../actions/notifications';

function PartnerCount(prop){

    const dispatch = useDispatch();
    const [count,setCount]=useState(0);
    useEffect(() => {
      dispatch(getNotification());
    }, [dispatch]);
  
    const notifications = useSelector((state) => state.notifications);
    console.log()
   return(
      <>
       {prop==="partnercount"?notifications.length:"0"}
       </>
   ); 
  
}
export default PartnerCount;
