import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER } from '../actionTypes/types';

export function showLoaderAC() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoaderAC() {
  return {
    type: HIDE_LOADER
  };
}

export function showErrorAC(payload) {
  return {
    type: SHOW_ERROR,
    payload
  };
}

export function hideErrorAC() {
  return {
    type: HIDE_ERROR
  };
}
