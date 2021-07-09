import { userActionTypes } from "./userActionTypes";

// a function that gets two props.
// get a last state or the current state,then an action.
// the action is obj that is a type that get a string value.
// also gets a payload, which is data.

// set an initial state.
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
