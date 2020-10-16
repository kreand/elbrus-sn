import { all } from 'redux-saga/effects'
import { authSagaWatcher, registrationSagaWatcher } from './authSaga'

export default function* rootSaga() {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher()
  ])
}
