import { call, put, takeEvery } from 'redux-saga/effects';
import {
  checkTokenHideLoaderAC,
  checkTokenShowLoaderAC,
  hideLoaderAC,
  showErrorAC,
  showLoaderAC
} from '../actionCreators/appAC';
import { auth } from '../actionCreators/authAC';
import { authUserAC, registrationUserAC } from '../actionCreators/profileAC';
import { DEFAULT_CHECK_TOKEN, GET_DEFAULT_USER, REGISTRATION_DEFAULT_USER } from '../actionTypes/types';

function * checkTokenWorker ({ token }) {
  yield put(checkTokenShowLoaderAC());
  const response = yield call(async () => {
    const response = await fetch('/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
    return await response.json();
  });
  if (response.errors) {
    yield put(hideLoaderAC());
  }
  yield put(authUserAC(response.user));
  yield put(auth());
  yield put(checkTokenHideLoaderAC());
}

export function * checkTokenWatcher () {
  yield takeEvery(DEFAULT_CHECK_TOKEN, checkTokenWorker);
}

function * authSagaWorker ({ user }) {
  yield put(showLoaderAC());
  const response = yield call(async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    });
    if (response.status === 400) {
      const { message } = await response.json();
      return { error: true, message };
    }
    return await response.json();
  });
  if (response.error) {
    yield put(hideLoaderAC());
    return yield put(showErrorAC(response.message));
  }
  yield put(authUserAC(response.user));
  yield put(auth());
  yield localStorage.setItem('userData', JSON.stringify({
    token: response.token
  }));
  yield put(hideLoaderAC());
}

export function * authSagaWatcher () {
  yield takeEvery(GET_DEFAULT_USER, authSagaWorker);
}

function * registrationSagaWorker ({ user }) {
  yield put(showLoaderAC());
  const response = yield call(async () => {
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password
      })
    });
    if (response.status === 400) {
      const { errors, message } = await response.json();
      return { error: true, errors, message };
    }
    return await response.json();
  });
  if (response.error) {
    yield put(hideLoaderAC());
    for (let i = 0; i < response.errors.length; i += 1){
      yield put(showErrorAC(response.errors[i].msg));
    }
    return;
  }
  yield put(registrationUserAC(response.user));
  yield put(auth());
  yield localStorage.setItem('userData', JSON.stringify({
    token: response.token
  }));
  yield put(hideLoaderAC());
}

export function * registrationSagaWatcher () {
  yield takeEvery(REGISTRATION_DEFAULT_USER, registrationSagaWorker);
}


