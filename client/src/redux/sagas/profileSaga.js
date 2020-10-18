import { call, put, takeEvery } from 'redux-saga/effects'
import { EDIT_USER_PROFILE } from '../actionTypes/types'
import { editUserProfileAC } from '../actionCreators/profileAC'

function* editUserProfileWorker({payload}) {
  const { _id, name, photo, email, password, status, coins, rairing, skills, history } = payload;
  const response = yield call(async () => {
    return await (await fetch('/profile/edit', {
      method: 'POST',
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify({_id, name, photo, email, password, status,
        coins, rairing, skills, history}),
    })).json();
  })
  yield put(editUserProfileAC(response.user))
}

export function* editProfileSagaWatcher() {
  yield takeEvery(EDIT_USER_PROFILE, editUserProfileWorker)
}
