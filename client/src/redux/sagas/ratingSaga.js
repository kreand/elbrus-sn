import {call,put,takeEvery} from 'redux-saga/effects'
import {GET_ALL_USERS} from '../actionTypes/types';
import {addAllUsersAC} from '../actionCreators/ratingAC';

function* worker(){
    const users = yield call(async () => {
        const response = await fetch('/students/')
       return  await response.json()
    })
    yield put(addAllUsersAC(users))
}

export function* ratingWatcher() {
    yield takeEvery(GET_ALL_USERS, worker)
}