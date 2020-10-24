import {
  ADD_DEFAULT_SHOP_ITEMS,
  ADD_SHOP_ITEMS,
  BUY_DEFAULT_ITEM_SHOP,
  DELETE_DEFAULT_ITEM_SHOP,
  GET_ALL_SHOP_ITEMS,
  GET_DEFAULT_SHOP_ALL_ITEMS,
} from '../actionTypes/types';

export function getAllShopItemsAC(payload) {
  return {
    type: GET_ALL_SHOP_ITEMS,
    payload,
  };
}

export function getDefaultAllShopItemsAC() {
  return {
    type: GET_DEFAULT_SHOP_ALL_ITEMS,
  };
}

export function addShopItem(payload) {
  return {
    type: ADD_SHOP_ITEMS,
    payload,
  };
}

export function addDefaultShopItem({ title, link, quantity, price }) {
  return {
    type: ADD_DEFAULT_SHOP_ITEMS,
    title,
    link,
    quantity,
    price,
  };
}

export function deleteDefaultItemShopAC(payload) {
  return {
    type: DELETE_DEFAULT_ITEM_SHOP,
    payload,
  };
}

export function buyDefaultItemShopAC(payload) {
  return {
    type: BUY_DEFAULT_ITEM_SHOP,
    payload,
  };
}
