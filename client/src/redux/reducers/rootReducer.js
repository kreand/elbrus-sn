import {combineReducers} from 'redux'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'
import {employerReducer} from './employerReducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  employer: employerReducer
})
