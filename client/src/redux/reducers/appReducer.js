import { HIDE_ERROR, HIDE_LOADER, SHOW_ERROR, SHOW_LOADER } from '../actionTypes/types'

const initialState = {
  isLoading: false,
  errors: {
    isError: false,
    errorMessage: ''
  }
}

export function appReducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true }
    case HIDE_LOADER:
      return { ...state, isLoading: false }
    case SHOW_ERROR:
      return { ...state, errors: { isError: true, errorMessage: action.payload } }
    case HIDE_ERROR:
      return { ...state, errors: { isError: false, errorMessage: '' } }
    default:
      return state
  }
}
