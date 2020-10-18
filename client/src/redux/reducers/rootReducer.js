import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { authReducer } from './authRedcuer'
import { profileReducer } from './profileReducer'
import {ratingReducer} from './ratingReducer';
import {
  activeEmployersButton,
  employerReducer,
  filterOnRatingEmployerReducer,
  searchEmployersReducer,
} from './employerReducer';

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  employers: employerReducer,
  employersTab: activeEmployersButton,
  searchEmployers: searchEmployersReducer,
  employersFilter: filterOnRatingEmployerReducer,
  rating: ratingReducer,
  app: appReducer
})
