import {call,put,takeEvery} from 'redux-saga/effects';
import {GET_ALL_USERS} from '../actionTypes/types';
import {addAllUsersAC} from '../actionCreators/ratingAC';

function* getAllUsersWorker(){
    const users = yield call(async () => {
        const response = await fetch('/students/allUsers');
       return  await response.json();
    });
    yield put(addAllUsersAC(users));
}

export function* getAllUsersWatcher() {
    yield takeEvery(GET_ALL_USERS, getAllUsersWorker);
}
