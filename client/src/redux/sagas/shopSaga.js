import { call, put, takeEvery } from '@redux-saga/core/effects';
import { hideLoaderAC, showErrorAC, showLoaderAC } from '../actionCreators/appAC';
import { addShopItem, getAllShopItemsAC } from '../actionCreators/shpoAC';
import { ADD_DEFAULT_SHOP_ITEMS, DELETE_DEFAULT_ITEM_SHOP, GET_DEFAULT_SHOP_ALL_ITEMS } from '../actionTypes/types';

function * shopSagaWorker ({ title, link, quantity, price }) {
  console.log(title, link, quantity, price);
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
        price
      })
    });
    if (response.status === 201) {
      return await response.json();
    }
    const error = await response.json();
    return error;
  });
  if (response.error) {
    yield put(showErrorAC(response.message));
  }
  yield put(addShopItem(response.item));
  yield put(hideLoaderAC());
}

export function * shopSagaWatcher () {
  yield takeEvery(ADD_DEFAULT_SHOP_ITEMS, shopSagaWorker);
}

function * getAllItemsShopWorker () {
  // yield put(showLoaderAC());
  const items = yield call(async () => {
    const response = await fetch('/shop/items');
    if (response.status === 200) {
      return await response.json();
    }
    return await response.json();
  });
  if (items.error) {
    yield put(showErrorAC(items.message));
  }
  yield put(getAllShopItemsAC(items));
}

export function * getAllItemsShopWatcher () {
  yield takeEvery(GET_DEFAULT_SHOP_ALL_ITEMS, getAllItemsShopWorker);
}

function * deleteItemShopWorker ({ item }) {

}

export function * deleteItemShopWatcher () {
  yield takeEvery(DELETE_DEFAULT_ITEM_SHOP, deleteItemShopWorker);
}
