import {
  ADD_DEFAULT_SHOP_ITEMS,
  ADD_SHOP_ITEMS,
  GET_ALL_SHOP_ITEMS,
  GET_DEFAULT_SHOP_ALL_ITEMS
} from '../actionTypes/types';

export function getAllShopItemsAC () {
  return {
    type: GET_ALL_SHOP_ITEMS
  };
}

export function getDefaultAllShopItemsAC () {
  return {
    type: GET_DEFAULT_SHOP_ALL_ITEMS
  };
}

export function addShopItem () {
  return {
    type: ADD_SHOP_ITEMS
  };
}

export function addDefaultShopItem ({ title, link, quantity, price }) {
  return {
    type: ADD_DEFAULT_SHOP_ITEMS,
    title, link, quantity, price
  };
}
