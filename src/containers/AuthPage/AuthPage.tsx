import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../../components/Auth/Auth";
import { loginUser, signup } from "../../store/actions/authactions";
import { Link, Redirect } from "@reach/router";
import { IAppState } from "../../App";
import AuthToolbar from "../UI/AuthToolbar/AuthToolbar";
import { Button } from "@material-ui/core";
import { auth } from "firebase";

interface IAuthPageProps {
  //signin: any;
  path: any;
  signin: any;
  isAuthenticated: boolean;
  signup: any;
  authError: any;
}

interface IAuthState {
  password: string;
  email: string;
  isSignup: boolean;
}

class AuthPage extends Component<IAuthPageProps> {
  state: IAuthState = {
    password: "",
    email: "",
    isSignup: false
  };

  emailChangedHandler = (emailChanged: React.ChangeEvent<HTMLInputElement>) => {
    const email = emailChanged.target.value;
    this.setState({ email: email });
  };

  passwordChangedHandler = (
    passwordChanged: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = passwordChanged.target.value;
    this.setState({ password: password });
  };

  submitHandler = () => {
    if (this.state.isSignup) {
      this.props.signup(this.state.email, this.state.password);
    } else {
      this.props.signin(this.state.email, this.state.password);
    }
  };

  switchAuthModeHandler = () => {
    this.setState((prevState: IAuthState) => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect noThrow to="/" />;
    }

    let authmethod = "";
    if (this.state.isSignup) {
      authmethod = "Create An Account: ";
    } else {
      authmethod = "Sign-In: ";
    }

    return (
      <div>
        {authRedirect}
        <AuthToolbar />
        <Auth
          handleEmailChange={this.emailChangedHandler}
          handlePasswordChange={this.passwordChangedHandler}
          authenticate={this.submitHandler}
          authmethod={authmethod}
          errormessage={this.props.authError}
        />
        <Button onClick={this.switchAuthModeHandler}>
          Switch to {this.state.isSignup ? "Sign-in" : "Sign-up"}
        </Button>
      </div>
    );
  }
}

const mapStatetoProps = (state: IAppState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    authError: state.auth.authError,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signin: async (email: string, password: string) =>
      dispatch(await loginUser(email, password)),
    signup: async (email: string, password: string) =>
      dispatch(await signup(email, password))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AuthPage);
