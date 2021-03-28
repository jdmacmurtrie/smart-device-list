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

    case types.DEVICE_SWITCH_TOGGLE:
      const { fullList } = state;

      // get device to be updated
      const oldDevice = fullList.find((device) => device.id === action.id);
      const deviceIndex = fullList.indexOf(oldDevice);

      // update state property/properties
      const newDevice = { ...oldDevice, state: { ...oldDevice.state, ...action.state } };

      // update list
      const newFullList = fullList.slice();
      newFullList.splice(deviceIndex, 1, newDevice);

      return {
        ...state,
        fullList: newFullList,
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
