import { CHANGE_ORDER } from '../actionTypes/types';

const initialState = { shoppingList: [] };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ORDER:
      return { ...state, shoppingList: [...action.payload] };
    default:
      return state;
  }
};
