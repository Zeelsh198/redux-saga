import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3000/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProduct(data) {
  console.log("search query" , data);
  let result = yield fetch(`http://localhost:3000/product?q=${data.query}`);
  result = yield result.json();  
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;
