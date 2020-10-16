import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'
import {ratingReducer} from './ratingReducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  app: appReducer,
  rating: ratingReducer
})
