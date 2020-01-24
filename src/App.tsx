import React, { Fragment, useState, Component } from "react";
import "./App.css";
import Notes from "./containers/Notes/Notes";
import NotesLogo from "./assets/images/notes-icon-png-14.jpg";
import NotesDisplay from "./containers/NotesDisplay/NotesDisplay";
import MaterialToolbar from "./containers/UI/AuthToolbar/AuthToolbar";
import { Router } from "@reach/router";
import NotesPage from "./containers/NotesPage/NotesPage";
import SignInPage from "./containers/AuthPage/AuthPage";
import MaterialUIToolbar from "./containers/UI/MaterialUIToolBar/MaterialUIToolBar";
import { Toolbar } from "@material-ui/core";
import AuthToolbar from "./containers/UI/AuthToolbar/AuthToolbar";
import AuthPage from "./containers/AuthPage/AuthPage";

export interface INoteArray {
  heading: string;
  text: string;
  id: string;
  userid: string;
  isselected: boolean;
}

export interface ICurrentNoteArray {
  id: string;
  heading: string;
  text: string;
}

export interface NotesState {
  items: INoteArray[];
  currentnote: ICurrentNoteArray[];
}

export interface AuthState {
  // token: string | null;
  // userId: string | null;
  // error: string | null;
  // loading: boolean;

  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isVerifying: boolean;
  authError: string;
  logoutError: boolean;
  isAuthenticated: boolean;
  user: any;
  userid: string | undefined;
  verifyingError: boolean;
  isSigningUp: boolean;
}

export interface IAppState {
  auth: AuthState;
  notes: NotesState;
}
class App extends Component {
  render() {
    //do an isauthenticate mapstate to props here only
    return (
      <div className="App">
        <Router>
          <NotesPage path="/" />
          <AuthPage path="/Auth" />
        </Router>
      </div>
    );
  }
}

export default App;
