import ShopActionTypes from "./shopTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/fireBaseUtils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
  //   payload: collectionsMap,
});

export const fetchCollectionSuccessCall = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    // when the collection ref updates, it will send us the snapshot represention the collection when it renders.
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then((snapshot) => {
        console.log("snapshot =========", snapshot);
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        console.log("---Collections map", collectionsMap);
        dispatch(fetchCollectionSuccessCall(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsError(error.message)));
  };
};
