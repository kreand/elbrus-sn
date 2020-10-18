import { all } from 'redux-saga/effects';
import { authSagaWatcher, registrationSagaWatcher } from './authSaga';
import { ratingWatcher } from './ratingSaga';
import { createEmployerSagaWatcher, getEmployersSagaWatcher } from './employerSaga';

export default function * rootSaga () {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    ratingWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher()
  ]);
}
