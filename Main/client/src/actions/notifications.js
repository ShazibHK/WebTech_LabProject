import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const updateNotification = (id, deal) => async (dispatch) => {
    try {
      const { data } = await api.updateNotification(id, deal);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const getNotification = () => async (dispatch) => {
    try {
      const { data } = await api.getNotification();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };