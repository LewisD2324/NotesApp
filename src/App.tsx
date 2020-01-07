import React, { Fragment, useState, Component } from "react";
import "./App.css";
import Notes from "./containers/Notes/Notes";
import NotesLogo from "./assets/images/notes-icon-png-14.jpg";
import NotesDisplay from "./containers/NotesDisplay/NotesDisplay";
import MaterialToolbar from "./containers/UI/MaterialToolbar/MaterialToolbar";
import { Router } from "@reach/router";
import NotesPage from "./containers/NotesPage/NotesPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import SignInPage from "./containers/SignInPage/SignInPage";
export interface INoteArray {
  heading: string;
  text: string;
  id: string;
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
  token: string;
  userId: string;
  error: string | null;
  loading: boolean;
}

export interface IAppState {
  auth: AuthState;
  notes: NotesState;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <MaterialToolbar />
        </header>
        <section>
          <Router>
            <NotesPage path="/" />
            <SignUpPage path="/Signup" />
            <SignInPage path="/Signin" />
          </Router>
        </section>
      </div>
    );
  }
}

export default App;
