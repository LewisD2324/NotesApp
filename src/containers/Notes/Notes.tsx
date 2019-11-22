import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import classes from "./Notes.module.css";
import Noting from "../../components/Noting/Noting";
import * as actioncreators from "../../store/actions/actions";
import { INotesState, ICurrentNoteArray, INoteArray } from "../../App";
import { connect } from "react-redux";

export interface INotesProps {
  notes: INoteArray[];

  currentnote: ICurrentNoteArray[];

  clearnotes: any;

  savetextNotes: any;

  saveheaderNotes: any;
  addnotes: any;
}
class Notes extends Component<INotesProps> {
  addNotes = () => {
    if (
      this.props.currentnote[0].value != "" &&
      this.props.currentnote[0].heading != ""
    ) {
      this.props.addnotes();
    }
  };

  savetext = (changed: React.ChangeEvent<HTMLInputElement>) => {
    const updatednote = changed.target.value;

    this.props.savetextNotes(updatednote);
  };

  saveheader = (changed: React.ChangeEvent<HTMLInputElement>) => {
    const updatednote = changed.target.value;

    this.props.saveheaderNotes(updatednote);
  };
  render() {
    return (
      <div className={classes.Notes}>
        <Fragment>
          <NotesToolBar onAdd={this.addNotes} onClear={this.props.clearnotes} />
          <Noting
            textchanged={this.savetext}
            headerchanged={this.saveheader}
            textvalue={this.props.currentnote[0].value}
            headervalue={this.props.currentnote[0].heading}
          />
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearnotes: () => dispatch({ type: actioncreators.CLEAR_NOTES }),
    savetextNotes: (updatednote: string) =>
      dispatch({ type: actioncreators.SAVE_TEXT_NOTES, updatednote }),
    saveheaderNotes: (updatednote: string) =>
      dispatch({ type: actioncreators.SAVE_HEADER_NOTES, updatednote }),
    addnotes: () => dispatch({ type: actioncreators.ADD_NOTES })
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
