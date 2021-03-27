// action types
const OTHER_DEVICES_SET = "OTHER_DEVICES_SET";

// action creators
export const setOtherDevices = (fullList) => ({
  type: OTHER_DEVICES_SET,
  fullList,
});

let initialState = {
  fullList: [],
};

// reducers
export const otherDevicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER_DEVICES_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};
