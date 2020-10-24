import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  hideLoaderAC,
  showErrorAC,
  showLoaderAC,
} from '../actionCreators/appAC';
import { addShopItem, getAllShopItemsAC } from '../actionCreators/shpoAC';
import {
  ADD_DEFAULT_SHOP_ITEMS,
  BUY_DEFAULT_ITEM_SHOP,
  DELETE_DEFAULT_ITEM_SHOP,
  DELETE_ORDER,
  GET_ALL_ORDERS,
  GET_DEFAULT_SHOP_ALL_ITEMS,
} from '../actionTypes/types';
import { editUserProfileAC } from '../actionCreators/profileAC';
import { changeOrderAC } from '../actionCreators/orderAC';

function* shopSagaWorker({ title, link, quantity, price }) {
  yield put(showLoaderAC());
  const response = yield call(async () => {
    const response = await fetch('/shop/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        link,
        quantity,
        price,
      }),
    });
    if (response.status === 201) {
      return await response.json();
    }
    return await response.json();
  });
  if (response.error) {
    yield put(showErrorAC(response.message));
  }
  yield put(addShopItem(response.item));
  yield put(hideLoaderAC());
}

export function* shopSagaWatcher() {
  yield takeEvery(ADD_DEFAULT_SHOP_ITEMS, shopSagaWorker);
}

function* getAllItemsShopWorker() {
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

export function* getAllItemsShopWatcher() {
  yield takeEvery(GET_DEFAULT_SHOP_ALL_ITEMS, getAllItemsShopWorker);
}

function* deleteItemShopWorker({ payload }) {
  const response = yield call(async () => {
    const response = await fetch('/shop/delete', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ itemId: payload }),
    });
    return await response.json();
  });
  yield put(getAllShopItemsAC(response));
}

export function* deleteItemShopWatcher() {
  yield takeEvery(DELETE_DEFAULT_ITEM_SHOP, deleteItemShopWorker);
}

function* buyItemShopWorker({ payload }) {
  const response = yield call(async () => {
    const response = await fetch('/shop/buy', {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ itemId: payload.itemId, userId: payload.userId }),
    });
    return await response.json();
  });
  if (response.error) {
    yield put(showErrorAC(response.message));
  } else {
    yield put(getAllShopItemsAC(response));
    yield put(editUserProfileAC(response.user));
    yield put(changeOrderAC(response.orders));
  }
}

export function* buyItemShopWatcher() {
  yield takeEvery(BUY_DEFAULT_ITEM_SHOP, buyItemShopWorker);
}

function* getAllOrdersWorker() {
  const response = yield call(async () => {
    return await (await fetch('/shop/orders')).json();
  });
  yield put(changeOrderAC(response.orders));
}

export function* getAllOrdersWatcher() {
  yield takeEvery(GET_ALL_ORDERS, getAllOrdersWorker);
}

function* deleteOrderWorker({ payload }) {
  const response = yield call(async () => {
    return await (
      await fetch('/shop/delete-order', {
        method: 'DELETE',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ orderId: payload }),
      })
    ).json();
  });
  yield put(changeOrderAC(response.orders));
}

export function* deleteOrderWatcher() {
  yield takeEvery(DELETE_ORDER, deleteOrderWorker);
}
