import fetch from "isomorphic-fetch"

import * as types from "./actionTypes"

function requestProducts() {
  return {
    type: types.REQUEST_PRODUCTS,
  }
};

function receiveProducts(payload) {
  return {
    type: types.RECEIVE_PRODUCTS,
    payload
  }
};

export const fetchProducts = (products) => {
  return (dispatch) => {
    dispatch(requestProducts());
    return fetch("https://blamm-store-backend.herokuapp.com/api/v1/products")
      .then(resp => resp.json())
      .then(json => {
        let products = json.results
        dispatch({type: types.FETCH_PRODUCTS, payload: products});
        dispatch(receiveProducts(products))
    })
  }
};
