import {
  receiveLogout,
  logoutError,
  requestLogout,
  loginError,
  receiveLogin,
  requestLogin,
  signupSuccess,
  signupFail,
  verifyRequest,
  verifySuccess
} from "./authactiontypes";
import firebase from "firebase";
import {
  AUTH_START,
  IActionAuthStart,
  AUTH_FAIL,
  IActionAuthFail,
  AUTH_SUCCESS,
  IActionAuthSuccess,
  LOG_OUT
} from "./authactiontypes";

export function logout() {
  return {
    type: LOG_OUT
  };
}

export function authSuccess(userId: any, idToken: any): IActionAuthSuccess {
  return {
    type: AUTH_SUCCESS,
    userId,
    idToken
  };
}

export function authFail(error: string | null): IActionAuthFail {
  return {
    type: AUTH_FAIL,
    error
  };
}

export function authStart(): IActionAuthStart {
  return {
    type: AUTH_START
  };
}

export async function signup(email: string, password: string) {
  return async (dispatch: any) => {
    //   dispatch(authStart());
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!user) return;

      dispatch(signupSuccess(user));
    } catch (error) {
      dispatch(signupFail(error.message));
      console.log(error);
    }
  };
}

/////////////////////
export async function loginUser(email: string, password: string) {
  return async (dispatch: any) => {
    dispatch(requestLogin());
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (!user) return;
      dispatch(receiveLogin(user));
    } catch (error) {
      dispatch(loginError(error.message));
      console.log(error);
    }
  };
}

export async function logoutUser() {
  return async (dispatch: any) => {
    dispatch(requestLogout());

    try {
      await firebase.auth().signOut();

      dispatch(receiveLogout());
    } catch (error) {
      dispatch(logoutError());
      console.log(error);
    }
  };
}

export function verifyAuth() {
  return (dispatch: any) => {
    dispatch(verifyRequest());
    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
  };
}
