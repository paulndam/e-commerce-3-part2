import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/fireBaseUtils";
import {
  fetchCollectionSuccessCall,
  fetchCollectionsError,
} from "./shopActions";
import ShopActionTypes from "./shopTypes";

// saga middle ware purpose is to run all middlewares together in a way that it doesn't block the execution

export function* fetchCollectionsAsync() {
  yield console.log("--- I am Fired ----");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // put dispatches out an object with a type of payload
    yield put(fetchCollectionSuccessCall(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  // takeEvery create a non blocking call, technically it doesn't pause any function to run

  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
