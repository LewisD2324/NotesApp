import {
  IActionEnterEmail,
  IActionEnterPassword,
  IActionSignUpFailure,
  IActionSignUpSuccess
} from "./authActiontypes";
import firebase from "firebase";
import { AuthActionTypeKeys } from "./authActionTypeKeys";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export const signinRequest = () => {
  return {
    type: AuthActionTypeKeys.SIGNIN_REQUEST
  };
};

export const signinSuccess = (user: any, userid: string | undefined) => {
  return {
    type: AuthActionTypeKeys.SIGNIN_SUCCESS,
    user,
    userid
  };
};

export const signinFailure = (error: string) => {
  return {
    type: AuthActionTypeKeys.SIGNIN_FAILURE,
    error
  };
};

export const signoutRequest = () => {
  return {
    type: AuthActionTypeKeys.SIGNOUT_REQUEST
  };
};

export const signoutSuccess = () => {
  return {
    type: AuthActionTypeKeys.SIGNOUT_SUCCESS
  };
};

export const signoutFailure = () => {
  return {
    type: AuthActionTypeKeys.SIGNOUT_FAILURE
  };
};

export const verifyRequest = () => {
  return {
    type: AuthActionTypeKeys.VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: AuthActionTypeKeys.VERIFY_SUCCESS
  };
};

export const verifyFailure = () => {
  return {
    type: AuthActionTypeKeys.VERIFY_FAILURE
  };
};

export const signupRequest = () => {
  return {
    type: AuthActionTypeKeys.SIGNUP_REQUEST
  };
};

export const signupSuccess = (
  user: any,
  userid: string | undefined
): IActionSignUpSuccess => {
  return {
    type: AuthActionTypeKeys.SIGNUP_SUCCESS,
    user,
    userid
  };
};

export const signupFailure = (error: string): IActionSignUpFailure => {
  return {
    type: AuthActionTypeKeys.SIGNUP_FAILURE,
    error
  };
};

export const enterEmail = (email: string): IActionEnterEmail => {
  return {
    type: AuthActionTypeKeys.ENTER_EMAIL,
    email
  };
};

export const enterPassword = (password: string): IActionEnterPassword => {
  return {
    type: AuthActionTypeKeys.ENTER_PASSWORD,
    password
  };
};

export const signup = (
  email: string,
  password: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(signupRequest());
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!user) return;
      const userid = user.user?.uid;
      dispatch(signupSuccess(user, userid));
    } catch (error) {
      dispatch(signupFailure(error.message));
      console.log(error);
    }
  };
};

export const signin = (
  email: string,
  password: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(signinRequest());
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (!user) return;

      dispatch(signinSuccess(user, user.user?.uid));
    } catch (error) {
      dispatch(signinFailure(error.message));
      console.log(error);
    }
  };
};

export const signout = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(signoutRequest());
    try {
      await firebase.auth().signOut();

      dispatch(signoutSuccess());
    } catch (error) {
      dispatch(signoutFailure());
      console.log(error);
    }
  };
};

export const verifyAuth = (): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(verifyRequest());
    try {
      await firebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(signinSuccess(user, user.uid));
        }
      });
      dispatch(verifySuccess());
    } catch (error) {
      dispatch(verifyFailure());
      console.log(error);
    }
  };
};
