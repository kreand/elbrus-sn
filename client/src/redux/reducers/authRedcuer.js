import { AUTH, LOGOUT } from '../actionTypes/types'

const initState = false

export function authReducer (state = initState, action) {
  switch (action.type) {
    case AUTH:
      return true
    case LOGOUT:
      return false
    default:
      return state
  }
}
