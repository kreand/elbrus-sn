import { ADD_SHOP_ITEMS } from '../actionTypes/types';

const initialState = [];

export function shopReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_SHOP_ITEMS:
      return [...state, action.payload];
    default: return state;
  }
}
