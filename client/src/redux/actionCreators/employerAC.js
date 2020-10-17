import {
  ADD_EMPLOYER,
  ADD_EMPLOYERS,
  CHANGE_ACTIVE_EMP_BTN,
  CREATE_EMPLOYER,
  GET_EMPLOYERS,
} from '../actionTypes/types';

export const getEmployers = () => {
  return {
    type: GET_EMPLOYERS,
  }
}

export const createEmployer = (payload) => {
  return {
    type: CREATE_EMPLOYER,
    payload
  }
}

export const addEmployers = (payload) => {
  return {
    type: ADD_EMPLOYERS,
    payload
  }
}

export const addEmployer = (payload) => {
  return {
    type: ADD_EMPLOYER,
    payload
  }
}

export const changeActiveEmpBtn = (payload) => {
  return {
    type: CHANGE_ACTIVE_EMP_BTN,
    payload
  }
}
