import {
  ADD_ALL_USERS,
  CHANGE_RATING,
  FILTER_USERS,
  GET_ALL_USERS,
} from '../actionTypes/types';

const initialState = {
  allUsers: [],
  filteredUsers: [],
};

export function ratingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state };
    case ADD_ALL_USERS:
      return { ...state, allUsers: action.payload };
    case FILTER_USERS:
      return { ...state, filteredUsers: action.payload };
    case CHANGE_RATING:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
}
