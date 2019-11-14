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

  deleteNotes = (note: string) => {
    // this.setState();
  };

  editNotes = (note: string) => {
    // this.setState();
  };

  addNotes = () => {
    const addednote = {
      id: this.state.notes.length + 1,
      heading: "",
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
            <NotesToolBar onAdd={this.addNotes} />
            <Noting textchanged={this.saveNotes} />
          </Fragment>
        </section>
      </div>
    );
  }
}

export default App;
