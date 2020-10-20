import { all } from 'redux-saga/effects';
import { authSagaWatcher, checkTokenWatcher, registrationSagaWatcher } from './authSaga';
import {changeRatingWatcher, getAllUsersWatcher} from './ratingSaga';
import { editProfileSagaWatcher } from './profileSaga';
import {
  addReviewSagaWatcher,
  createEmployerSagaWatcher,
  deleteReviewSagaWatcher,
  getEmployersSagaWatcher,
} from './employerSaga';
import { shopSagaWatcher } from './shopSaga';

export default function * rootSaga () {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    getAllUsersWatcher(),
    changeRatingWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher(),
    deleteReviewSagaWatcher(),
    editProfileSagaWatcher(),
    addReviewSagaWatcher(),
    checkTokenWatcher(),
    shopSagaWatcher()
  ]);
}
