import { CLEAR_USER, EDIT_USER_PROFILE, GET_USER, REGISTRATION_USER } from '../actionTypes/types'

const initialState = {};

export function profileReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case REGISTRATION_USER:
      return { ...state, user: action.payload }
    case EDIT_USER_PROFILE:
      return { 
        user: {
        ...state.user,
        name: action.payload.name,
        skills: [...action.payload.skills]
      }
    }
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
}
