import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDeals } from '../../actions/deals';
import { getUsers } from '../../actions/auth';
import Deal from './Deal/Deal';
import useStyles from './styles';

const Deals = () => {
const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDeals());
  }, [currentId, dispatch]);

  const deals = useSelector((state) => state.deals);
  console.log(deals)
  const notifications = useSelector((s) => s.notifications);
  console.log(notifications)
  const classes = useStyles();
  return (
    <div>
   { !deals.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {deals.map((deal) => (
          
          <Grid key={deal._id} item xs={12} sm={12} md={12}>
            <Deal deal={deal} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    
    )}
     

    </div>
  );
};

export default Deals;
