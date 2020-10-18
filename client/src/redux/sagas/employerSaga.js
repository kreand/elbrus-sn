import {call, put, takeEvery} from 'redux-saga/effects';
import {CREATE_EMPLOYER, GET_EMPLOYERS} from '../actionTypes/types';
import {addEmployer, addEmployers} from '../actionCreators/employerAC';

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

export function* getEmployersSagaWatcher() {
  yield takeEvery(GET_EMPLOYERS, getEmployersSagaWorker);
}

export function* createEmployerSagaWatcher() {
  yield takeEvery(CREATE_EMPLOYER, createEmployerSagaWorker);
}

