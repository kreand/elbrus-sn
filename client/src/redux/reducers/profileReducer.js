import { GET_USER, REGISTRATION_USER } from '../actionTypes/types'

const initialState = {}

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload
    case REGISTRATION_USER:
      return action.payload
    default:
      return state
  }
}
