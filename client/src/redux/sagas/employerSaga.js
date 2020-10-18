import {call, put, takeEvery} from 'redux-saga/effects';
import {ADD_REVIEW, CREATE_EMPLOYER, GET_EMPLOYERS} from '../actionTypes/types';
import {addEmployer, addEmployers, changeState} from '../actionCreators/employerAC';

function* getEmployersSagaWorker() {
  const employers = yield call(async () => {
    return await (await fetch('/employers/get-all-employers')).json();
  });
  yield put(addEmployers(employers));
}

function* createEmployerSagaWorker({payload}) {
  const response = yield call(async () => {
    return await (await fetch('/employers/create-employer', {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify({payload}),
    })).json();
  });
  yield put(addEmployer(response.employer));
}

function* addReviewSagaWorker({payload}) {
  const response = yield call(async () => {
    return await (await fetch('/employers/add-review', {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify({payload}),
    })).json();
  });
  yield put(addEmployers(response.allEmployers));
  yield put(changeState('change'));
}

export function* getEmployersSagaWatcher() {
  yield takeEvery(GET_EMPLOYERS, getEmployersSagaWorker);
}

export function* createEmployerSagaWatcher() {
  yield takeEvery(CREATE_EMPLOYER, createEmployerSagaWorker);
}

export function* addReviewSagaWatcher() {
  yield takeEvery(ADD_REVIEW, addReviewSagaWorker);
}
