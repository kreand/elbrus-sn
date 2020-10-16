import {ADD_ALL_USERS, GET_ALL_USERS} from '../actionTypes/types';

export function ratingReducer(state ={allUsers: []}, action) {
    switch (action.type) {
        case(GET_ALL_USERS):
            return {...state}
        case(ADD_ALL_USERS):
            return {...state, allUsers: action.payload}
        default:
           return state
    }
}