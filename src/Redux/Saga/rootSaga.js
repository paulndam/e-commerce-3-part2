import { all, call } from "redux-saga/effects";

import { userSaga } from "../UserReducer/userSaga";
import { cartSaga } from "../CartReducer/cartSaga";
import { shopSaga } from "../Shop/shopSaga";

export default function* rootSaga() {
  // all takes an array of saga.
  // bundles all sagas together
  // and initialize them all at once when possible.
  yield all([call(userSaga), call(cartSaga), call(shopSaga)]);
}
