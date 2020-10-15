import {combineReducers} from 'redux'
import { profileReducer } from './profileReducer'

export const rootReducer = combineReducers({
  profile: profileReducer
})
