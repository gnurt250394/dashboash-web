import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { authReducer } from "./persist/AuthReducers";
const storage = require('redux-persist/lib/storage').default;

const authenSetup = {
  key: "root",
  storage: storage,
  whitelist: ["userProfile", "isLoginSecurity"],
};

export default combineReducers({
  auth: persistReducer(authenSetup, authReducer),
});
