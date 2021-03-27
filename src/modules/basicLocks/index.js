// action types
const BASIC_LOCKS_SET = "BASIC_LOCKS_SET";

// action creators
export const setBasicLocks = (fullList) => ({
  type: BASIC_LOCKS_SET,
  fullList,
});

let initialState = {
  fullList: [],
};

// reducers
export const basicLocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASIC_LOCKS_SET:
      return {
        ...state,
        fullList: action.fullList,
      };

    default:
      return state;
  }
};
