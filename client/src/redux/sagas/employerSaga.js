import { call, put, takeEvery } from 'redux-saga/effects'
import {CREATE_EMPLOYER, GET_EMPLOYERS} from '../actionTypes/types';

function* getEmployersSagaWorker() {

}

function* createEmployerSagaWorker({data}) {
  console.log(data)
}

export function* getEmployersSagaWatcher() {
  yield takeEvery(GET_EMPLOYERS, getEmployersSagaWorker)
}

export function* createEmployerSagaWatcher() {
  yield takeEvery(CREATE_EMPLOYER, createEmployerSagaWorker)
}

