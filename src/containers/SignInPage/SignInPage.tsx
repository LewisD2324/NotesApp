import React, { Component } from "react";
import { connect } from "react-redux";
import Auth from "../../components/Auth/Auth";
import { IAuthState } from "../SignUpPage/SignUpPage";
import { signin } from "../../store/actions/actions";
import { Link } from "@reach/router";

interface ISignInPageProps {
  signin: any;
  path: any;
}

class SignInPage extends Component<ISignInPageProps> {
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
    this.props.signin(this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <Auth
          email={this.emailChangedHandler}
          password={this.passwordChangedHandler}
          authenticate={this.submitHandler}
        />
        <Link to="/Signup">Switch to Sign-Up</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    signin: (email: string, password: string) =>
      dispatch(signin(email, password))
  };
};

export default connect(null, mapDispatchToProps)(SignInPage);
