import { FETCH_ALL, CREATE } from '../constants/actionTypes';

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

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
