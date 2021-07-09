import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "../Reducer/rootReducer";

// redux persist allow browser to cache our store.

<<<<<<< HEAD
const middlewares = [logger];
=======
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
>>>>>>> a7eb74b (added styled components)

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// const exportObj = {
//   store,
//   persistor,
// };
<<<<<<< HEAD
=======

>>>>>>> a7eb74b (added styled components)
export default { store, persistor };
