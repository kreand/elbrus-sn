import {combineReducers} from 'redux'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer
})
