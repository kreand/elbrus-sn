import { AUTH, LOGOUT } from '../actionTypes/types'

export function auth() {
  return {
    type: AUTH
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
