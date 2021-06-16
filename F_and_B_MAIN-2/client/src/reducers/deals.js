import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (deals = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...deals, action.payload];
    case UPDATE:
        return deals.map((deal) => (deal._id === action.payload._id ? action.payload : deal));
    case DELETE:
      return deals.filter((deal) => deal._id !== action.payload);
    default:
      return deals;
  }
};
