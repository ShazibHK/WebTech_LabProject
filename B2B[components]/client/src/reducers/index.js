import { combineReducers } from 'redux';

import posts from './posts';
import deals from './deals';

export const reducers = combineReducers({ posts, deals });

