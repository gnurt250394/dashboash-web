import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

/* global __DEV__ */

const sagaMiddleware = createSagaMiddleware();
const middleware = [];

middleware.push(thunk);

if (process.env.NODE_ENV == "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export { store, persistor };
