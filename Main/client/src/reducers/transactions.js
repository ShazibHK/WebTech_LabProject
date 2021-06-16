import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (transactions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return transactions.map((transaction) => (transaction._id === action.payload._id ? action.payload : transaction));
     case CREATE:
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};

