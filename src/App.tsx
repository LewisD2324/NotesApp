import React, { Fragment, useState, Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Notes from "./containers/Notes/Notes";
import NotesList from "./components/NotesList/NotesList";
import Noting from "./components/Noting/Noting";
import NotesToolBar from "./components/NotesToolBar/NotesToolBar";
import NotesDisplay from "./containers/NotesDisplay/NotesDisplay";

export interface INoteArray {
  heading: string;
  value: string;
  id: number;
}

export interface ICurrentNoteArray {
  heading: string;
  value: string;
}

export interface INotesState {
  notes: INoteArray[];
  currentnote: string;

  currentnotenew: ICurrentNoteArray[];
}

const notesarray = [
  { id: 0, heading: "test", value: "testing" },
  { id: 1, heading: "test2", value: "testing2" }
];

const currentnotesarray = [
  { heading: "", value: "" },
  { heading: "", value: "" }
];
class App extends Component {
  state: INotesState = {
    currentnote: "",
    currentnotenew: currentnotesarray,
    notes: notesarray
  };

  saveNotes = (changed: React.ChangeEvent<HTMLInputElement>) => {
    // this.setState();
    const updatednote = changed.target.value;

    this.setState({ currentnote: updatednote });
  };

  clearNote = () => {
    let currentnotestate = this.state.currentnote;
    currentnotestate = "";
    this.setState({ currentnote: currentnotestate });
  };

  deleteNotes = (note: string) => {
    // this.setState();
  };

  editNotes = (note: string) => {
    // this.setState();
  };

  selectNotes = () => {};

  addNotes = () => {
    const addednote = {
      id: this.state.notes.length + 1,
      heading: "Notes: " + (this.state.notes.length + 1),
      value: this.state.currentnote
    };
    const newnotelist = this.state.notes.concat([addednote]);
    this.setState({ notes: newnotelist });
  };

  render() {
    return (
      <div className="App">
        <header>
          <strong>Welcome to you're Notes App!</strong>
        </header>
        <section>
          <Fragment>
            <SearchBar />
            <NotesList notes={this.state.notes} />
            <NotesToolBar onAdd={this.addNotes} onClear={this.clearNote} />
            <Noting
              textchanged={this.saveNotes}
              currentnote={this.state.currentnote}
            />
          </Fragment>
        </section>
      </div>
    );
  }
}

export default App;
