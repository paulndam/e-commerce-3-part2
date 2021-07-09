// All Reducers shall be in here.
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../UserReducer/userReducer";
import cartReducer from "../CartReducer/cartReducer";
import directoryReducer from "../Directory/directoryReducer";
import shopReducer from "../Shop/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
