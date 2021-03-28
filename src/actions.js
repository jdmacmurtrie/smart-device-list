// action types
export const types = {
  BASIC_LOCKS_SET: "BASIC_LOCKS_SET",
  DEVICE_SWITCH_TOGGLE: "DEVICE_SWITCH_TOGGLE",
  OTHER_DEVICES_SET: "OTHER_DEVICES_SET",
  SPECIAL_LOCKS_SET: "SPECIAL_LOCKS_SET",
};

// action creators
// ***** Basic Locks *****
export const setBasicLocks = (fullList) => ({
  type: types.BASIC_LOCKS_SET,
  fullList,
});

// ***** Other Devices *****
export const setOtherDevices = (fullList) => ({
  type: types.OTHER_DEVICES_SET,
  fullList,
});

export const toggleDeviceSwitch = (payload) => ({
  // payload to have `id` and `state`
  type: types.DEVICE_SWITCH_TOGGLE,
  ...payload,
});

// ***** Special Locks *****
export const setSpecialLocks = (fullList) => ({
  type: types.SPECIAL_LOCKS_SET,
  fullList,
});
