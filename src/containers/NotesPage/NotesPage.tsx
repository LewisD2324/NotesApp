import React, { Component } from "react";
import NotesDisplay from "../NotesDisplay/NotesDisplay";
import Notes from "../Notes/Notes";
import MaterialUIToolbar from "../UI/MaterialUIToolBar/MaterialUIToolBar";
import { IAppState } from "../../App";
import { connect } from "react-redux";
import { logoutUser } from "../../store/actions/authactions";
import { Redirect } from "@reach/router";

export interface INotesPageProps {
  path: string;
  logout: any;
  isAuthenticated: boolean;
}

class NotesPage extends Component<INotesPageProps> {
  logoutHandler = () => {
    this.props.logout();
  };

  render() {
    let authRedirect = null;
    if (!this.props.isAuthenticated) {
      authRedirect = <Redirect noThrow to="/Auth" />;
    }

    return (
      <div>
        {authRedirect}
        <MaterialUIToolbar logout={this.logoutHandler} />
        <NotesDisplay />
        <Notes />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: async () => dispatch(await logoutUser())
  };
};

const mapStateToProps = (state: IAppState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
