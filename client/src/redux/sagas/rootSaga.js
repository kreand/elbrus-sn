import { all } from 'redux-saga/effects'
import { authSagaWatcher, registrationSagaWatcher } from './authSaga'
import {ratingWatcher} from './ratingSaga'

export default function* rootSaga() {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
      ratingWatcher()
  ])
}
