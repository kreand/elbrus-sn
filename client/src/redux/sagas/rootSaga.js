import { all } from 'redux-saga/effects'
import { authSagaWatcher, registrationSagaWatcher } from './authSaga'
import {createEmployerSagaWatcher, getEmployersSagaWatcher} from './employerSaga';

export default function* rootSaga() {
  yield all([
    registrationSagaWatcher(),
    authSagaWatcher(),
    getEmployersSagaWatcher(),
    createEmployerSagaWatcher()
  ])
}
