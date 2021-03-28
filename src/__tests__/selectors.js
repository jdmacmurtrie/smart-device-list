import { basicLocksList, otherDevicesList, specialLocksList } from "../selectors";

const state = {
  basicLocks: { fullList: [{ name: "test", id: "1" }] },
  specialLocks: {
    fullList: [{ name: "test", id: "other_1" }],
  },
  otherDevices: {
    fullList: [
      {
        id: 2,
        name: "Unit 102 Dimmer",
        type: "Dimmer Switch",
        state: {
          level: 90,
          switch_state: "on",
        },
      },
    ],
  },
};

describe("basicLocksList", () => {
  it("runs basicLocksList selector", () => {
    expect(basicLocksList(state)).toEqual([
      {
        ...state.basicLocks.fullList[0],
        id: "basic-lock-1",
        type: "basic-lock",
      },
    ]);
  });
});

describe("specialLocksList", () => {
  it("runs specialLocksList selector in valid time period", () => {
    const today = new Date().getDay();
    const stateClone = JSON.parse(JSON.stringify(state));
    stateClone.specialLocks.fullList[0].schedule = `0 0 * * ${today}`;

    expect(specialLocksList(stateClone)).toEqual([
      {
        ...stateClone.specialLocks.fullList[0],
        type: "special-lock",
        accessible: true,
      },
    ]);
  });

  it("runs specialLocksList selector in invalid hour", () => {
    const rightNow = new Date().getHours();
    const stateClone = JSON.parse(JSON.stringify(state));
    stateClone.specialLocks.fullList[0].schedule = `0 ${rightNow - 1} * * 1,3,5`;

    expect(specialLocksList(stateClone)).toEqual([
      {
        ...stateClone.specialLocks.fullList[0],
        type: "special-lock",
        accessible: false,
      },
    ]);
  });

  it("runs specialLocksList selector in invalid day", () => {
    const today = new Date().getDay();
    const stateClone = JSON.parse(JSON.stringify(state));
    stateClone.specialLocks.fullList[0].schedule = `0 0 * * ${today - 1}`;

    expect(specialLocksList(stateClone)).toEqual([
      {
        ...stateClone.specialLocks.fullList[0],
        type: "special-lock",
        accessible: false,
      },
    ]);
  });
});

describe("otherDevicesList", () => {
  it("runs otherDevicesList selector", () => {
    expect(otherDevicesList(state)).toEqual([
      {
        apiId: 2,
        id: "other-device-2",
        type: "other-device",
        name: "Unit 102 Dimmer",
        state: {
          level: 90,
          switch_state: "on",
          switchState: "on",
        },
      },
    ]);
  });
});
