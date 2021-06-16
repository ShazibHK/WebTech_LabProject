import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getOrders= () => async (dispatch) => {
  try {
    const { data } = await api.fetchOrders();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createOrder = (post) => async (dispatch) => {
  try {
    const { data } = await api.createOrder(post);
     console.log(data)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateOrder = (id, order) => async (dispatch) => {
  try {
    const { data } = await api.updateDeal(id, order);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder= (id) => async (dispatch) => {
  try {
    await await api.deleteOrder(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};