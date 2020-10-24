import {
  ADD_EMPLOYER,
  ADD_EMPLOYERS,
  ADD_LOCAL_EMPLOYERS,
  ADD_REVIEW,
  CHANGE_ACTIVE_EMP_BTN,
  CHANGE_FILTER_RATING,
  CHANGE_STATE,
  CLEAR_EMPLOYERS,
  CREATE_EMPLOYER,
  DELETE_EMPLOYER,
  DELETE_REVIEW,
  GET_EMPLOYERS,
} from '../actionTypes/types';

export const getEmployers = () => {
  return {
    type: GET_EMPLOYERS,
  };
};

export const createEmployer = payload => {
  return {
    type: CREATE_EMPLOYER,
    payload,
  };
};

export const addEmployers = payload => {
  return {
    type: ADD_EMPLOYERS,
    payload,
  };
};

export const addEmployer = payload => {
  return {
    type: ADD_EMPLOYER,
    payload,
  };
};

export const changeActiveEmpBtn = payload => {
  return {
    type: CHANGE_ACTIVE_EMP_BTN,
    payload,
  };
};

export const addLocalEmployers = payload => {
  return {
    type: ADD_LOCAL_EMPLOYERS,
    payload,
  };
};

export const changeFilterOnRating = payload => {
  return {
    type: CHANGE_FILTER_RATING,
    payload,
  };
};

export const clearEmployersAC = () => {
  return {
    type: CLEAR_EMPLOYERS,
  };
};

export const addReviewAC = payload => {
  return {
    type: ADD_REVIEW,
    payload,
  };
};

export const changeState = payload => {
  return {
    type: CHANGE_STATE,
    payload,
  };
};

export const deleteReview = payload => {
  return {
    type: DELETE_REVIEW,
    payload,
  };
};

export const deleteEmployer = payload => {
  return {
    type: DELETE_EMPLOYER,
    payload,
  };
};
