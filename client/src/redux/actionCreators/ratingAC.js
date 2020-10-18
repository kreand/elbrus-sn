import {
    ADD_ALL_USERS, FILTER_USERS,GET_ALL_USERS,
} from '../actionTypes/types';

export const getAllUsersAC = () => {
    return({
        type: GET_ALL_USERS,
    });
};

export const addAllUsersAC = (users) => {
    return ({
        type:ADD_ALL_USERS,
        payload:users
    });
};

export const filterUsersAC = (filtered) => {
    return({
        type: FILTER_USERS,
        payload: filtered
    });
};