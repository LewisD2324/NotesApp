import { signoutRequest } from "./authActions";
import { AuthActionTypeKeys } from "./authActionTypeKeys";
import { Action } from "redux";

export interface IAuthBaseAction extends Action {
  type: AuthActionTypeKeys;
}

export interface IActionSignInRequest extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNIN_REQUEST;
}

export interface IActionSignInSuccess extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNIN_SUCCESS;
  user: any;
  userid: any;
}

export interface IActionSignInFailure extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNIN_FAILURE;
  error: string;
}

export interface IActionSignOutRequest extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNOUT_REQUEST;
}

export interface IActionSignOutSuccess extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNOUT_SUCCESS;
}

export interface IActionSignOutFailure extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNOUT_FAILURE;
}

export interface IActionVerifyRequest extends IAuthBaseAction {
  type: AuthActionTypeKeys.VERIFY_REQUEST;
}
export interface IActionVerifySuccess extends IAuthBaseAction {
  type: AuthActionTypeKeys.VERIFY_SUCCESS;
}

export interface IActionVerifyFailure extends IAuthBaseAction {
  type: AuthActionTypeKeys.VERIFY_FAILURE;
}
export interface IActionSignUpRequest extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNUP_REQUEST;
}
export interface IActionSignUpSuccess extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNUP_SUCCESS;
  user: any;
  userid: string | undefined;
}
export interface IActionSignUpFailure extends IAuthBaseAction {
  type: AuthActionTypeKeys.SIGNUP_FAILURE;
  error: string;
}

export interface IActionEnterEmail extends IAuthBaseAction {
  type: AuthActionTypeKeys.ENTER_EMAIL;
  email: string;
}

export interface IActionEnterPassword extends IAuthBaseAction {
  type: AuthActionTypeKeys.ENTER_PASSWORD;
  password: string;
}

export type AuthActions =
  | IActionSignInRequest
  | IActionSignInSuccess
  | IActionSignInFailure
  | IActionSignOutRequest
  | IActionSignOutSuccess
  | IActionSignOutFailure
  | IActionVerifyRequest
  | IActionVerifySuccess
  | IActionVerifyFailure
  | IActionSignUpRequest
  | IActionSignUpSuccess
  | IActionSignUpFailure
  | IActionEnterEmail
  | IActionEnterPassword;
