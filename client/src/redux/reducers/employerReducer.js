import {
  ADD_EMPLOYER,
  ADD_EMPLOYERS,
  ADD_LOCAL_EMPLOYERS,
  CHANGE_ACTIVE_EMP_BTN,
  CHANGE_FILTER_RATING,
} from '../actionTypes/types';

const initialEmployersState = []

export const employerReducer = (state = initialEmployersState, action) => {
  switch (action.type) {
    case ADD_EMPLOYER:
      return [...state, action.payload]
    case ADD_EMPLOYERS:
      return [...action.payload]
    default:
      return state
  }
}

export const activeEmployersButton = (state = {active: 'all-employers'}, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_EMP_BTN:
      return {active: action.payload}
    default:
      return state
  }
}

export const searchEmployersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LOCAL_EMPLOYERS:
      return [...action.payload]
    default:
      return state
  }
}

export const filterOnRatingEmployerReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER_RATING:
      return [...action.payload]
    default:
      return state
  }
}
