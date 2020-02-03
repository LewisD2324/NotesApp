import { AuthActionTypeKeys } from "../actions/auth/authActionTypeKeys";
import { AuthState } from "../../models/state/authState";
import { AuthActions } from "../actions/auth/authActiontypes";

const initialState: AuthState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isSigningUp: false,
  isVerifying: false,
  authError: "",
  logoutError: false,
  verifyingError: false,
  isAuthenticated: false,
  user: {},
  userid: "",
  email: "",
  password: ""
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypeKeys.SIGNIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true
      };
    case AuthActionTypeKeys.SIGNIN_SUCCESS:
      console.log(action.user);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
        userid: action.userid
      };
    case AuthActionTypeKeys.SIGNIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        authError: action.error
      };
    case AuthActionTypeKeys.SIGNOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false
      };
    case AuthActionTypeKeys.SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        userid: ""
      };
    case AuthActionTypeKeys.SIGNOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case AuthActionTypeKeys.SIGNUP_REQUEST:
      return {
        ...state,
        isSigningUp: true,
        authError: "",
        isAuthenticated: false
      };
    case AuthActionTypeKeys.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        authError: action.error,
        isAuthenticated: false
      };
    case AuthActionTypeKeys.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isAuthenticated: true,
        user: action.user,
        userid: action.userid
      };
    case AuthActionTypeKeys.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false
      };
    case AuthActionTypeKeys.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
        verifyingError: false
      };
    case AuthActionTypeKeys.VERIFY_FAILURE:
      return {
        ...state,
        verifyingError: true
      };
    case AuthActionTypeKeys.ENTER_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case AuthActionTypeKeys.ENTER_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}

export default reducer;
