import React, { Fragment, useState, Component } from "react";
import "./App.css";
import Notes from "./containers/Notes/Notes";
import NotesLogo from "./assets/images/notes-icon-png-14.jpg";
import NotesDisplay from "./containers/NotesDisplay/NotesDisplay";

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

export interface INotesState {
  notes: INoteArray[];
  currentnote: ICurrentNoteArray[];
}
class App extends Component {
  deleteNotes = (note: string) => {
    // this.setState();
  };

  editNotes = (note: string) => {
    // this.setState();
  };

  render() {
    return (
      <div className="App">
        <header>
          <strong>Welcome to you're Notes App!</strong>
          <img
            src={NotesLogo}
            style={{ maxHeight: "40px", minWidth: "auto" }}
          ></img>
        </header>
        <section>
          <NotesDisplay />
          <Notes />
        </section>
      </div>
    );
  }
}

export default App;
