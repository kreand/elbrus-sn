import { all } from 'redux-saga/effects';
import {
  authSagaWatcher,
  checkTokenWatcher,
  registrationSagaWatcher,
} from './authSaga';
import { changeRatingWatcher, getAllUsersWatcher } from './ratingSaga';
import { editProfileSagaWatcher } from './profileSaga';
import {
  addReviewSagaWatcher,
  createEmployerSagaWatcher,
  deleteEmployerSagaWatcher,
  deleteReviewSagaWatcher,
  getEmployersSagaWatcher,
} from './employerSaga';
import {
  buyItemShopWatcher,
  deleteItemShopWatcher,
  deleteOrderWatcher,
  getAllItemsShopWatcher,
  getAllOrdersWatcher,
  shopSagaWatcher,
} from './shopSaga';

export default function* rootSaga() {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    getAllUsersWatcher(),
    changeRatingWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher(),
    deleteReviewSagaWatcher(),
    deleteEmployerSagaWatcher(),
    editProfileSagaWatcher(),
    addReviewSagaWatcher(),
    checkTokenWatcher(),
    shopSagaWatcher(),
    getAllItemsShopWatcher(),
    deleteItemShopWatcher(),
    buyItemShopWatcher(),
    getAllOrdersWatcher(),
    deleteOrderWatcher(),
  ]);
}
