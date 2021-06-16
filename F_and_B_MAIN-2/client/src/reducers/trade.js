import {  UPDATE,FETCH_ALL } from '../constants/actionTypes';

export default (trade = [], action) => {
  switch (action.type) {
      
    case UPDATE:
        return trade.map((trade) => (trade._id === action.payload._id ? action.payload : trade));
     default:
      return trade;
  }
};
