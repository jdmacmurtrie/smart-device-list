export const basicLocksList = (state) => {
  const { fullList } = state.basicLocks;

  return fullList.map((lock) => ({ ...lock, id: `basic-lock-${lock.id}`, type: "basic-lock" }));
};

export const specialLocksList = (state) => {
  const { fullList } = state.specialLocks;

  return fullList.map((lock) => {
    /*
      The logic below abides by the following assumptions, given a schedule format: "x y * * a,b,c,..."

      - x represents the first hour the lock is accessible
      - y represents the first hour the lock is inaccessible
      - accessible hours follow 24 hour format, where 0 represents midnight
      - hours can be no less than 0 and no more than 24, or the difference between the starting value and midnight
      -- therefore, the lock is only accessible during times between x and y

      - a, b, c, and so on represent days of the week that the lock is accessible
      - there will be no fewer than 0 and no more than 7 letters in the sequence
    */
    let timesAccessible = lock.schedule
      .split(" * *")[0]
      .split(" ")
      .map((time) => Number(time));

    if (timesAccessible[1] === 0) {
      // translate second midnight to 24
      timesAccessible = [timesAccessible[0], 24];
    }

    const currentHour = new Date().getHours();
    const isCurrentHourAccessible =
      timesAccessible[0] <= currentHour && currentHour < timesAccessible[1];

    const daysAvailable = lock.schedule
      .split("* * ")[1]
      .split(",")
      .map((day) => Number(day));
    const currentDay = new Date().getDay();
    const isCurrentDayAccessible = daysAvailable.includes(currentDay);

    const lockIsAccessible = isCurrentHourAccessible && isCurrentDayAccessible;

    return { ...lock, type: "special-lock", accessible: lockIsAccessible };
  });
};

export const otherDevicesList = (state) => {
  const { fullList } = state.otherDevices;

  return fullList.map(({ id, name, state }) => ({
    apiId: id,
    id: `other-device-${id}`,
    name,
    type: "other-device",
    state: {
      ...state,
      switchState: state.switchState || state.switch_state,
    },
  }));
};
