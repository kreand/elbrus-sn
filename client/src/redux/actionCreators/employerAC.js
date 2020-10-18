import {
  ADD_EMPLOYER,
  ADD_EMPLOYERS, ADD_LOCAL_EMPLOYERS,
  CHANGE_ACTIVE_EMP_BTN, CHANGE_FILTER_RATING, CLEAR_EMPLOYERS,
  CREATE_EMPLOYER,
  GET_EMPLOYERS,
} from '../actionTypes/types';

export const getEmployers = () => {
  return {
    type: GET_EMPLOYERS,
  };
};

export const createEmployer = (payload) => {
  return {
    type: CREATE_EMPLOYER,
    payload
  };
};

export const addEmployers = (payload) => {
  return {
    type: ADD_EMPLOYERS,
    payload
  };
};

export const addEmployer = (payload) => {
  return {
    type: ADD_EMPLOYER,
    payload
  };
};

export const changeActiveEmpBtn = (payload) => {
  return {
    type: CHANGE_ACTIVE_EMP_BTN,
    payload
  };
};

export const addLocalEmployers = (payload) => {
  return {
    type: ADD_LOCAL_EMPLOYERS,
    payload
  };
};

export const changeFilterOnRating = (payload) => {
  return {
    type: CHANGE_FILTER_RATING,
    payload
  };
};

export const clearEmployersAC = () => {
  return {
    type: CLEAR_EMPLOYERS
  };
};
