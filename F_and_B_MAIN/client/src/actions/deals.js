import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getDeals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchDeals();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDeal = (post) => async (dispatch) => {
  try {
    const { data } = await api.createDeal(post);
     console.log(data)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDeal = (id) => async (dispatch) => {
  try {
    await await api.deleteDeal(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const updateDeal = (id, deal) => async (dispatch) => {
  try {
    const { data } = await api.updateDeal(id, deal);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

