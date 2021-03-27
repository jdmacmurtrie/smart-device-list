// action types
export const types = {
  BASIC_LOCKS_SET: "BASIC_LOCKS_SET",
  OTHER_DEVICES_SET: "OTHER_DEVICES_SET",
  SPECIAL_LOCKS_SET: "SPECIAL_LOCKS_SET",
};

export const setBasicLocks = (fullList) => ({
  type: types.BASIC_LOCKS_SET,
  fullList,
});

export const setOtherDevices = (fullList) => ({
  type: types.OTHER_DEVICES_SET,
  fullList,
});

export const setSpecialLocks = (fullList) => ({
  type: types.SPECIAL_LOCKS_SET,
  fullList,
});
