import { AUTH, LOGOUT } from '../actionTypes/types'

const initState = { isAuth: false }

export function authReducer (state = initState, action) {
  switch (action.type) {
    case AUTH:
      return { isAuth: true }
    case LOGOUT:
      return { isAuth: false }
    default:
      return state
  }
}
