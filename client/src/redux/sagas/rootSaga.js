import { all } from 'redux-saga/effects';
import { authSagaWatcher, registrationSagaWatcher } from './authSaga';
import {getAllUsersWatcher} from './ratingSaga';
import {addReviewSagaWatcher, createEmployerSagaWatcher, getEmployersSagaWatcher} from './employerSaga';

export default function * rootSaga () {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    getAllUsersWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher(),
    addReviewSagaWatcher()
  ]);
}
