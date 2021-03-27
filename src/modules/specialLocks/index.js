// action types
const SPECIAL_LOCKS_SET = "SPECIAL_LOCKS_SET";

// action creators
export const setSpecialLocks = (fullList) => ({
  type: SPECIAL_LOCKS_SET,
  fullList,
});

let initialState = {
  fullList: [],
};

// reducers
export const specialLocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPECIAL_LOCKS_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};
