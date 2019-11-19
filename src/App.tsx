import React, { Fragment, useState, Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Notes from "./containers/Notes/Notes";
import NotesList from "./components/NotesList/NotesList";
import Noting from "./components/Noting/Noting";
import NotesToolBar from "./components/NotesToolBar/NotesToolBar";
import NotesLogo from "./assets/images/notes-icon-png-14.jpg";
import { connect } from "react-redux";
import * as actioncreators from "./store/actions/actions";
import { clearnotes } from "./store/actions/actions";
import { AnyMxRecord } from "dns";

export interface INoteArray {
  heading: string;
  value: string;
  id: number;
}

export interface AppProps {
  notes: INoteArray[];
  currentnote: string;

  currentnotenew: ICurrentNoteArray[];

  clearnotes: any;

  savenotes: any;
  addnotes: any;
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

//store notes in firebase
const notesarray = [
  { id: 0, heading: "test", value: "testing" },
  { id: 1, heading: "test2", value: "testing2" }
];

const currentnotesarray = [
  { heading: "", value: "" },
  { heading: "", value: "" }
];
class App extends Component<AppProps> {
  state: INotesState = {
    currentnote: "",
    currentnotenew: currentnotesarray,
    notes: notesarray
  };

  saveNotes = (changed: React.ChangeEvent<HTMLInputElement>) => {
    const updatednote = changed.target.value;

    this.props.savenotes(updatednote);
  };

  deleteNotes = (note: string) => {
    // this.setState();
  };

  editNotes = (note: string) => {
    // this.setState();
  };

  selectNotes = () => {};

  addNotes = () => {
    if (this.props.currentnote != "") {
      this.props.addnotes();
    }
    console.log(this.props.notes);
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
          <Fragment>
            <SearchBar />
            <NotesList notes={this.props.notes} />
            <NotesToolBar
              onAdd={this.addNotes}
              onClear={this.props.clearnotes}
            />
            <Noting
              textchanged={this.saveNotes}
              currentnote={this.props.currentnote}
            />
          </Fragment>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote,
    currentnotenew: state.currentnotenew
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearnotes: () => dispatch({ type: actioncreators.CLEAR_NOTES }),
    savenotes: (updatednote: string) =>
      dispatch({ type: actioncreators.SAVE_NOTES, updatednote }),
    addnotes: () => dispatch({ type: actioncreators.ADD_NOTES })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
