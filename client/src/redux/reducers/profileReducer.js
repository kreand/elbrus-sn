import {
  CLEAR_USER,
  EDIT_USER_PROFILE,
  GET_USER,
  REGISTRATION_USER,
  ADD_PHOTO_URL,
} from '../actionTypes/types';

const initialState = {
  user: {},
  imgUrl: '',
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case REGISTRATION_USER:
      return { ...state, user: action.payload };
    case EDIT_USER_PROFILE:
      return { ...state, user: action.payload };
    case ADD_PHOTO_URL:
      return { ...state, imgUrl: action.payload };
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
}
