import { Action } from "redux";

export const AUTH_START = "AUTH_START";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const receiveLogin = (user: any, userid: string | undefined) => {
  return {
    type: LOGIN_SUCCESS,
    user,
    userid
  };
};

export const loginError = (error: string) => {
  return {
    type: LOGIN_FAILURE,
    error
  };
};

export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export function signupSuccess(
  user: any,
  userid: string | undefined
): IActionSignUpSuccess {
  return {
    type: SIGNUP_SUCCESS,
    user,
    userid
  };
}

export function signupFail(error: string): IActionSignUpFail {
  return {
    type: SIGNUP_FAIL,
    error
  };
}

export interface IActionAuthFail extends Action {
  type: "AUTH_FAIL";
  error: string | null;
}

export interface IActionAuthSuccess extends Action {
  type: "AUTH_SUCCESS";
  userId: any;
  idToken: any;
}

export interface IActionAuthStart extends Action {
  type: "AUTH_START";
}

export interface IActionLogOut extends Action {
  type: "LOG_OUT";
}

export interface IActionLogInRequest extends Action {
  type: "LOGIN_REQUEST";
}

export interface IActionLogInSuccess extends Action {
  type: "LOGIN_SUCCESS";
  user: any;
  userid: any;
}

export interface IActionLogInFailure extends Action {
  type: "LOGIN_FAILURE";
  error: string;
}

export interface IActionLogOutRequest extends Action {
  type: "LOGOUT_REQUEST";
}

export interface IActionLogOutSuccess extends Action {
  type: "LOGOUT_SUCCESS";
}

export interface IActionLogOutFailure extends Action {
  type: "LOGOUT_FAILURE";
}

export interface IActionVerifyRequest extends Action {
  type: "VERIFY_REQUEST";
}
export interface IActionVerifySuccess extends Action {
  type: "VERIFY_SUCCESS";
}

export interface IActionSignUpSuccess extends Action {
  type: "SIGNUP_SUCCESS";
  user: any;
  userid: string | undefined;
}
export interface IActionSignUpFail extends Action {
  type: "SIGNUP_FAIL";
  error: string;
}

export type AuthActions =
  | IActionAuthSuccess
  | IActionAuthFail
  | IActionAuthStart
  | IActionLogOut
  | IActionLogInRequest
  | IActionLogInSuccess
  | IActionLogInFailure
  | IActionLogOutRequest
  | IActionLogOutSuccess
  | IActionLogOutFailure
  | IActionVerifyRequest
  | IActionVerifySuccess
  | IActionSignUpSuccess
  | IActionSignUpFail;
