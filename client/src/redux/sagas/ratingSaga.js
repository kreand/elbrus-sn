import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_USERS, DEFAULT_CHANGE_RATING } from '../actionTypes/types';
import { addAllUsersAC, getAllUsersAC } from '../actionCreators/ratingAC';

function* getAllUsersWorker() {
  const users = yield call(async () => {
    const response = await fetch('/students/allUsers');
    return await response.json();
  });
  yield put(addAllUsersAC(users));
}

export function* getAllUsersWatcher() {
  yield takeEvery(GET_ALL_USERS, getAllUsersWorker);
}

function* changeRatingWorker({
  id,
  rating,
  name,
  email,
  skills,
  group,
  status,
}) {
  const response = yield call(async () => {
    const response = await fetch('/students/change', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: id,
        rating: rating,
        name: name,
        email: email,
        skills: skills,
        group: group,
        status: status,
      }),
    });
    return await response.json();
  });
  yield put(getAllUsersAC(response));
}

export function* changeRatingWatcher() {
  yield takeEvery(DEFAULT_CHANGE_RATING, changeRatingWorker);
}
