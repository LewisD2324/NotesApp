import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../../components/Auth/Auth";
import * as actions from "../../store/actions/auth/authActions";
import { Redirect } from "@reach/router";
import { IAppState } from "../../models/state/appState";
import AuthToolbar from "../../components/UI/AuthToolbar/AuthToolbar";
import { Button } from "@material-ui/core";
import classes from "./AuthPage.module.css";

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const dispatch = useDispatch();
  const signin = async (email: string, password: string) =>
    dispatch(await actions.signin(email, password));
  const signup = async (email: string, password: string) =>
    dispatch(await actions.signup(email, password));
  const enteremail = (email: string) => dispatch(actions.enterEmail(email));
  const enterpassword = (password: string) =>
    dispatch(actions.enterPassword(password));

  const isAuthenticated = useSelector(
    (state: IAppState) => state.auth.isAuthenticated
  );
  const authError = useSelector((state: IAppState) => state.auth.authError);
  const email = useSelector((state: IAppState) => state.auth.email);
  const password = useSelector((state: IAppState) => state.auth.password);

  const emailChangedHandler = (
    emailChanged: React.ChangeEvent<HTMLInputElement>
  ) => {
    enteremail(emailChanged.target.value);
  };

  const passwordChangedHandler = (
    passwordChanged: React.ChangeEvent<HTMLInputElement>
  ) => {
    enterpassword(passwordChanged.target.value);
  };

  const submitHandler = () => {
    if (isSignUp) {
      signup(email, password);
    } else {
      signin(email, password);
    }
  };

  const switchAuthModeHandler = () => {
    setIsSignUp(!isSignUp);
  };

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect noThrow to="/" />;
  }

  let authmethod = "";
  if (isSignUp) {
    authmethod = "Create An Account: ";
  } else {
    authmethod = "Sign-In: ";
  }

  return (
    <div>
      {authRedirect}
      <AuthToolbar />
      <Auth
        handleEmailChange={emailChangedHandler}
        handlePasswordChange={passwordChangedHandler}
        authenticate={submitHandler}
        authmethod={authmethod}
        errormessage={authError}
      />
      <Button onClick={switchAuthModeHandler} className={classes.SignMethod}>
        Switch to {isSignUp ? "Sign-in" : "Sign-up"}
      </Button>
    </div>
  );
};

export default AuthPage;
