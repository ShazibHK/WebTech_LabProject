import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const tradeSubmission = (id,ac, deal) => async (dispatch) => {
    try {
      const { data } = await api.tradeSubmission(id,ac,deal);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };