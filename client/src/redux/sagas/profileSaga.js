import { call, put, takeEvery } from 'redux-saga/effects'
import { EDIT_USER_BY_SAGA } from '../actionTypes/types'
import { editUserProfileAC } from '../actionCreators/profileAC'

function* editUserProfileWorker({payload}) {
  const response = yield call(async () => {
    return await (await fetch('/profile/edit', {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(payload),
    })).json();
  })
  yield put(editUserProfileAC(response.user))
}

export function* editProfileSagaWatcher() {
  yield takeEvery(EDIT_USER_BY_SAGA, editUserProfileWorker)
}
