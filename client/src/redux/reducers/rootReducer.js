import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  app: appReducer
})
