import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_REVIEW,
  CREATE_EMPLOYER,
  DELETE_EMPLOYER,
  DELETE_REVIEW,
  GET_EMPLOYERS,
} from '../actionTypes/types';
import {
  addEmployer,
  addEmployers,
  changeState,
} from '../actionCreators/employerAC';
import { showErrorAC } from '../actionCreators/appAC';

function* getEmployersSagaWorker() {
  const employers = yield call(async () => {
    return await (await fetch('/employers/get-all-employers')).json();
  });
  yield put(addEmployers(employers));
}

function* createEmployerSagaWorker({ payload }) {
  const response = yield call(async () => {
    return await (
      await fetch('/employers/create-employer', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ payload }),
      })
    ).json();
  });
  if (response.error) {
    yield put(showErrorAC(response.message));
  } else {
    yield put(addEmployer(response.employer));
    yield put(changeState(true));
  }
}

function* addReviewSagaWorker({ payload }) {
  const response = yield call(async () => {
    return await (
      await fetch('/employers/add-review', {
        method: 'POST',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ payload }),
      })
    ).json();
  });

  if (response.error) {
    yield put(showErrorAC(response.message));
  } else {
    yield put(addEmployers(response.allEmployers));
    yield put(changeState(true));
  }
}

function* deleteReviewSagaWorker({ payload }) {
  const response = yield call(async () => {
    return await (
      await fetch('/employers/delete-review', {
        method: 'DELETE',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ payload }),
      })
    ).json();
  });
  yield put(addEmployers(response.allEmployers));
}

function* deleteEmployerSagaWorker({ payload }) {
  const response = yield call(async () => {
    return await (
      await fetch('/employers/delete-employer', {
        method: 'DELETE',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ payload }),
      })
    ).json();
  });
  yield put(addEmployers(response.allEmployers));
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

export function* deleteReviewSagaWatcher() {
  yield takeEvery(DELETE_REVIEW, deleteReviewSagaWorker);
}

export function* deleteEmployerSagaWatcher() {
  yield takeEvery(DELETE_EMPLOYER, deleteEmployerSagaWorker);
}
