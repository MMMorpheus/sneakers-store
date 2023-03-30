import {
  GET_ALL_PRODUCTS,
  GET_CART_PRODUCTS,
  GET_FAVOURITE_PRODUCTS,
  SET_SEARCH_VALUE,
  HANDLE_CART,
  REMOVE_FROM_CART
} from "@/boilerplate";

export const getAllProducts = (payload) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
};

export const getCartProducts = (payload) => {
  return {
    type: GET_CART_PRODUCTS,
    payload,
  };
};

export const getFavouriteProducts = (payload) => {
  return {
    type: GET_FAVOURITE_PRODUCTS,
    payload,
  };
};

export const setSearchValue = (payload) => {
  return {
    type: SET_SEARCH_VALUE,
    payload,
  };
};

export const handleCart = (payload) => {
  return {
    type: HANDLE_CART,
    payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};