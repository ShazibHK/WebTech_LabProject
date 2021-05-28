import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (deals = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return deals;
    case CREATE:
      return [...deals, action.payload];
    case UPDATE:
      return deals;
    case DELETE:
      return deals;
    default:
      return deals;
  }
};
