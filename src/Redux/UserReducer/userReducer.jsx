import userActionTypes from "./userActionTypes";

// a function that gets two props.
// get a last state or the current state,then an action.
// the action is obj that is a type that get a string value.
// also gets a payload, which is data.

// set an initial state.
const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActionTypes.GOOGLE_SIGN_IN_FAIL:
    case userActionTypes.EMAIL_SIGN_IN_FAIL:
    case userActionTypes.SIGN_OUT_FAIL:
    case userActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
