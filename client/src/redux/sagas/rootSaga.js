import { all } from 'redux-saga/effects';
import { authSagaWatcher, checkTokenWatcher, registrationSagaWatcher } from './authSaga';
import {changeRatingWatcher, getAllUsersWatcher} from './ratingSaga';
import {addReviewSagaWatcher, createEmployerSagaWatcher, getEmployersSagaWatcher} from './employerSaga';

export default function * rootSaga () {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    getAllUsersWatcher(),
    changeRatingWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher(),
    addReviewSagaWatcher(),
    checkTokenWatcher()
  ]);
}
