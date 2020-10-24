import {
  CHANGE_ORDER,
  DELETE_ORDER,
  GET_ALL_ORDERS,
} from '../actionTypes/types';

export const changeOrderAC = payload => {
  return {
    type: CHANGE_ORDER,
    payload,
  };
};

export const getAllOrders = payload => {
  return {
    type: GET_ALL_ORDERS,
    payload,
  };
};

export const deleteOrder = payload => {
  return {
    type: DELETE_ORDER,
    payload,
  };
};
