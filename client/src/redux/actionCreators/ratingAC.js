import {
  ADD_ALL_USERS,
  CHANGE_RATING,
  DEFAULT_CHANGE_RATING,
  FILTER_USERS,
  GET_ALL_USERS,
} from '../actionTypes/types';

export const getAllUsersAC = () => {
  return {
    type: GET_ALL_USERS,
  };
};

export const addAllUsersAC = users => {
  return {
    type: ADD_ALL_USERS,
    payload: users,
  };
};

export const filterUsersAC = filtered => {
  return {
    type: FILTER_USERS,
    payload: filtered,
  };
};

export const changeRatingAC = payload => {
  return {
    type: CHANGE_RATING,
    payload,
  };
};
export const defaultChangeRatingAC = payload => {
  return {
    type: DEFAULT_CHANGE_RATING,
    id: payload._id,
    rating: payload.rating,
    name: payload.name,
    email: payload.email,
    skills: payload.skills,
    group: payload.group,
    status: payload.status,
  };
};
