export const basicLocksWithType = (state) => {
  const { fullList } = state.basicLocks;

  return fullList.map((lock) => ({ ...lock, id: `basic-lock-${lock.id}`, type: "basic-lock" }));
};
