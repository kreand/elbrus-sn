import {
  CLEAR_USER,
  GET_DEFAULT_USER,
  GET_USER,
  REGISTRATION_DEFAULT_USER,
  REGISTRATION_USER
} from '../actionTypes/types';

export function authUserAC(payload) {
  return {
    type: GET_USER,
    payload
  };
}

export function getDefaultUserAC(payload) {
  return {
    type: GET_DEFAULT_USER,
    user: payload
  };
}

export function registrationUserAC(payload) {
  return {
    type: REGISTRATION_USER,
    payload
  };
}

export function registrationDefaultUserAC(payload) {
  return {
    type: REGISTRATION_DEFAULT_USER,
    user: payload
  };
}

export function clearUserAC() {
  return {
    type: CLEAR_USER,
  };
}
