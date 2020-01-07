import React, { Component } from "react";
import Auth from "../../components/Auth/Auth";
import { connect } from "react-redux";
import { auth } from "../../store/actions/actions";
import { Button } from "@material-ui/core";
import { Link } from "@reach/router";
import { IAppState } from "../../App";
import { ActionYoutubeSearchedFor } from "material-ui/svg-icons";
interface ISignUpProps {
  signup: any;
  path: any;
  error: any;
}

export interface IAuthState {
  password: string;
  email: string;
}
class SignUpPage extends Component<ISignUpProps> {
  state: IAuthState = {
    password: "",
    email: ""
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
    this.props.signup(this.state.email, this.state.password);
  };

  render() {
    let errormessage = null;
    if (this.props.error) {
      errormessage = <p>{this.props.error}</p>;
    }
    return (
      <div>
        <Auth
          email={this.emailChangedHandler}
          password={this.passwordChangedHandler}
          authenticate={this.submitHandler}
        />
        <Link to="/Signin">Switch to Sign-In</Link>
        {errormessage}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    error: state.auth.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: async (email: string, password: string) =>
      dispatch(await auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
