import { combineReducers, createStore } from "redux";
import { basicLocksReducer, otherDevicesReducer, specialLocksReducer } from "./reducers";

const rootReducer = combineReducers({
  basicLocks: basicLocksReducer,
  otherDevices: otherDevicesReducer,
  specialLocks: specialLocksReducer,
});

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export const store = createStore(rootReducer, enableReduxDevTools);
