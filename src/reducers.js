import { types } from "./actions";

let basicLocksInitialState = {
  fullList: [],
};

let otherDevicesInitialState = {
  fullList: [],
};

let specialLocksInitialState = {
  fullList: [],
};

export const basicLocksReducer = (state = basicLocksInitialState, action) => {
  switch (action.type) {
    case types.BASIC_LOCKS_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};

export const otherDevicesReducer = (state = otherDevicesInitialState, action) => {
  switch (action.type) {
    case types.OTHER_DEVICES_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};

export const specialLocksReducer = (state = specialLocksInitialState, action) => {
  switch (action.type) {
    case types.SPECIAL_LOCKS_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};
