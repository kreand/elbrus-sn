import {ADD_EMPLOYER, ADD_EMPLOYERS, CREATE_EMPLOYER, GET_EMPLOYERS} from '../actionTypes/types';

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
