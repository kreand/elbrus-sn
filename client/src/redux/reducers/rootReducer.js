import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'
import {ratingReducer} from './ratingReducer';
import {employerReducer} from './employerReducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  rating: ratingReducer
  employer: employerReducer,
  app: appReducer
})
