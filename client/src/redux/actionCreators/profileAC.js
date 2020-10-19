import {
  CLEAR_USER, DEFAULT_CHECK_TOKEN,
  GET_DEFAULT_USER,
  GET_USER,
  REGISTRATION_DEFAULT_USER,
  REGISTRATION_USER,
  EDIT_USER_PROFILE,
  EDIT_USER_BY_SAGA
} from '../actionTypes/types'

export function authUserAC (payload) {
  return {
    type: GET_USER,
    payload
  };
}

export function getDefaultUserAC (payload) {
  return {
    type: GET_DEFAULT_USER,
    user: payload
  };
}

export function registrationUserAC (payload) {
  return {
    type: REGISTRATION_USER,
    payload
  };
}

export function registrationDefaultUserAC (payload) {
  return {
    type: REGISTRATION_DEFAULT_USER,
    user: payload
  };
}

export function clearUserAC () {
  return {
    type: CLEAR_USER
  };
}

export default function defaultCheckTokenAC (token) {
  return {
    type: DEFAULT_CHECK_TOKEN,
    token
  };
}

export function editUserProfileAC (payload) {
  return {
    type: EDIT_USER_PROFILE,
    payload
  }
}

export function editUserBySagaAC (payload) {
  return {
    type: EDIT_USER_BY_SAGA,
    payload
  }
}
