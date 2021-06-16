import { FETCH_ALL, CREATE, UPDATE, DELETE, } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const fetchTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTransaction = (product) => async (dispatch) => {
  try {
    const { data } = await api.createTransaction(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTransaction = (id,type,value,product) => async (dispatch) => {
  try {
    const { data } = await api.updateTransaction(id,type,value,product);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};