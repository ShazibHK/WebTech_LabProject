import {  UPDATE,FETCH_ALL } from '../constants/actionTypes';

export default (notifications = [], action) => {
  switch (action.type) {

    case FETCH_ALL:
      return action.payload;
      
    case UPDATE:
        return notifications.map((notification) => (notification._id === action.payload._id ? action.payload : notification));

     default:
      return notifications;
  }
};
