import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import deals from './deals';

export const reducers = combineReducers({ posts, auth, deals });
