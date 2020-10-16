import { call, put, takeEvery } from 'redux-saga/effects'
import { authUserAC, registrationUserAC } from '../actionCreators/profileAC'
import { GET_DEFAULT_USER, REGISTRATION_DEFAULT_USER } from '../actionTypes/types'

function * authSagaWorker ({ user }) {
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
    })
    return await response.json()
  })
  if(response.errors) {
    console.log(response.message)
  }
  yield put(authUserAC(user))
  console.log(response.user)
}

export function * authSagaWatcher () {
  yield takeEvery(GET_DEFAULT_USER, authSagaWorker)
}

function * registrationSagaWorker ({ user }) {
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
    })
    return await response.json()
  })
  if(response.errors) {
    console.log(response.message)
  }
  yield put(registrationUserAC(user))
  console.log(response.message)
}

export function * registrationSagaWatcher () {
  yield takeEvery(REGISTRATION_DEFAULT_USER, registrationSagaWorker)
}


