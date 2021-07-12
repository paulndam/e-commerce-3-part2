import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../Reducer/rootReducer";
import rootSaga from "../Saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
// redux persist allow browser to cache our store.

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
