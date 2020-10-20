import { call, put, takeEvery } from '@redux-saga/core/effects';
import { showLoaderAC } from '../actionCreators/appAC';
import { ADD_DEFAULT_SHOP_ITEMS } from '../actionTypes/types';

function * shopSagaWorker ({ title, link, quantity, price }) {
  yield put(showLoaderAC());
  const response = yield call(async () => {
    const response = await fetch('/shop/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        link,
        quantity,
        price,
      })
    });
    return await response.json();
  });
  console.log(response);
}

export function * shopSagaWatcher () {
  yield takeEvery(ADD_DEFAULT_SHOP_ITEMS, shopSagaWorker);
}
