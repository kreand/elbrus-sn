import {ADD_EMPLOYER, ADD_EMPLOYERS} from '../actionTypes/types';

const initialState = []

export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYER:
      return [...state, action.payload]
    case ADD_EMPLOYERS:
      return [...action.payload]
    default:
      return state;
  }
}
