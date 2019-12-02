import React, { Fragment, Component } from "react";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import Noting from "../../components/Noting/Noting";
import * as actiontypes from "../../store/actions/types";
import { INotesState, ICurrentNoteArray, INoteArray } from "../../App";
import { connect } from "react-redux";
import axios from "../../axios.notes";
import { addnotes } from "../../store/actions/actions";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";
export interface INotesProps {
  notes: INoteArray[];

  currentnote: ICurrentNoteArray[];

  clearnotes: any;
  savetextNotes: any;
  saveheaderNotes: any;
  fetchnotes: any;
  addnotes: any;
  savenotes: any;
}
class Notes extends Component<INotesProps> {
  addNotes = () => {
    //display alert if notes are empty
    if (
      this.props.currentnote[0].text != "" &&
      this.props.currentnote[0].heading != ""
    ) {
      this.props.addnotes(this.props.currentnote[0]);
    }
  };

  updatetext = (changed: React.ChangeEvent<HTMLInputElement>) => {
    const updatednote = changed.target.value;

    this.props.savetextNotes(updatednote);
  };

  updateheader = (changed: React.ChangeEvent<HTMLInputElement>) => {
    const updatednote = changed.target.value;

    this.props.saveheaderNotes(updatednote);
  };

  savenotes = () => {};
  render() {
    return (
      <div>
        <Fragment>
          <NotesToolBar
            onAdd={this.addNotes}
            onClear={this.props.clearnotes}
            onSave={this.props.savenotes}
          />
          <Noting
            textchanged={this.updatetext}
            headerchanged={this.updateheader}
            textvalue={this.props.currentnote[0].text}
            headervalue={this.props.currentnote[0].heading}
          />
        </Fragment>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearnotes: () => dispatch({ type: actiontypes.CLEAR_NOTES }),
    savetextNotes: (updatednote: string) =>
      dispatch({ type: actiontypes.SAVE_TEXT_NOTES, updatednote }),
    saveheaderNotes: (updatednote: string) =>
      dispatch({ type: actiontypes.SAVE_HEADER_NOTES, updatednote }),
    fetchnotes: (fetchedNotes: INoteArray[]) =>
      dispatch({ type: actiontypes.FETCH_NOTES, fetchedNotes }),
    addnotes: (addednote: ICurrentNoteArray[]) => dispatch(addnotes(addednote))
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
