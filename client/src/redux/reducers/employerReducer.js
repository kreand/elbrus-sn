import {
  ADD_EMPLOYER,
  ADD_EMPLOYERS,
  ADD_LOCAL_EMPLOYERS,
  CHANGE_ACTIVE_EMP_BTN,
  CHANGE_FILTER_RATING,
  CHANGE_STATE,
  CLEAR_EMPLOYERS,
} from '../actionTypes/types';

const initialEmployersState = {
  allEmployers: [],
  filterEmployers: [],
  findEmployers: [],
  activeTab: 'all-employers',
  change: false,
};

export const employerReducer = (state = initialEmployersState, action) => {
  switch (action.type) {
    case CLEAR_EMPLOYERS:
      return initialEmployersState;
    case ADD_EMPLOYER:
      return {
        ...state,
        allEmployers: [...state.allEmployers, action.payload],
      };
    case ADD_EMPLOYERS:
      return { ...state, allEmployers: [...action.payload] };
    case CHANGE_FILTER_RATING:
      return { ...state, filterEmployers: [...action.payload] };
    case ADD_LOCAL_EMPLOYERS:
      return { ...state, findEmployers: [...action.payload] };
    case CHANGE_ACTIVE_EMP_BTN:
      return { ...state, activeTab: action.payload };
    case CHANGE_STATE:
      return { ...state, change: action.payload };
    default:
      return state;
  }
};
