import { ADD_SHOP_ITEMS, GET_ALL_SHOP_ITEMS } from '../actionTypes/types';

const initialState = [];

export function shopReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_SHOP_ITEMS:
      return [...state, action.payload];
    case GET_ALL_SHOP_ITEMS:
      return [...action.payload.items];
    default: return state;
  }
}
