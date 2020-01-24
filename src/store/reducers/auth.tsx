import * as actiontypes from "../actions/authactiontypes";
import { AuthState } from "../../App";
import { AuthActions } from "../actions/authactiontypes";

const initialState: AuthState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isSigningUp: false,
  isVerifying: false,
  authError: "",
  logoutError: false,
  isAuthenticated: false,
  verifyingError: false,
  user: {},
  userid: ""
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    // case actiontypes.AUTH_START:
    //   return {
    //     ...state,
    //     error: null,
    //     loading: true
    //   };
    // case actiontypes.AUTH_SUCCESS:
    //   return {
    //     ...state,
    //     token: action.idToken,
    //     userId: action.userId,
    //     error: null,
    //     loading: false
    //   };
    // case actiontypes.AUTH_FAIL:
    //   return {
    //     ...state,
    //     error: action.error,
    //     loading: false
    //   };
    //   case actiontypes.LOG_OUT:
    //   return {
    //     ...state,
    //     token: null,
    //     userId: null
    //   }
    case actiontypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case actiontypes.LOGIN_SUCCESS:
      console.log(action.user);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
        userid: action.userid
      };
    case actiontypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        authError: action.error
      };
    case actiontypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
        user: {}
      };
    case actiontypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
        userid: ""
      };
    case actiontypes.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: false
      };
    case actiontypes.SIGNUP_FAIL:
      return {
        ...state,
        isSigningUp: false,
        authError: action.error,
        isAuthenticated: false
      };
    case actiontypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        user: action.user,
        userid: action.userid
      };
    case actiontypes.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case actiontypes.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    default:
      return state;
  }
}

export default reducer;
