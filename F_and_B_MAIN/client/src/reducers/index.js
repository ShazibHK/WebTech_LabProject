import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import deals from './deals';
import notifications from './notifications';
import products from './products';
import trade from './trade';
import transactions from './transactions';
export const reducers = combineReducers({ posts, deals, auth,notifications,products,trade,transactions });
