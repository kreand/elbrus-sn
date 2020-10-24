import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { authReducer } from './authRedcuer';
import { profileReducer } from './profileReducer';
import { ratingReducer } from './ratingReducer';
import { employerReducer } from './employerReducer';
import { shopReducer } from './shopReducer';
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  employers: employerReducer,
  rating: ratingReducer,
  app: appReducer,
  shop: shopReducer,
  order: orderReducer,
});
