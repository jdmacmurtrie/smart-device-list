import { combineReducers, createStore } from "redux";

import { basicLocksReducer } from "./modules/basicLocks";
import { otherDevicesReducer } from "./modules/otherDevices";
import { specialLocksReducer } from "./modules/specialLocks";

const rootReducer = combineReducers({
  basicLocks: basicLocksReducer,
  otherDevices: otherDevicesReducer,
  specialLocks: specialLocksReducer,
});

export const store = createStore(rootReducer);
