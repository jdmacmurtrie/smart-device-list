import { combineReducers, createStore } from "redux";

import { basicLocksReducer } from "./modules/basicLocks";
import { otherDevicesReducer } from "./modules/otherDevices";
import { specialLocksReducer } from "./modules/specialLocks";

const rootReducer = combineReducers({
  basicLocks: basicLocksReducer,
  otherDevices: otherDevicesReducer,
  specialLocks: specialLocksReducer,
});

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export const store = createStore(rootReducer, enableReduxDevTools);
