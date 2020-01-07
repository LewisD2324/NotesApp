import React, { Fragment, Component } from "react";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import Noting from "../../components/Noting/Noting";
import * as actiontypes from "../../store/actions/types";
import {
  NotesState,
  ICurrentNoteArray,
  INoteArray,
  IAppState
} from "../../App";
import { connect } from "react-redux";
import axios from "../../axios.notes";
import { addnotes, updatenotes, getnotes } from "../../store/actions/actions";
import ConfirmationDialog from "../UI/ConfirmationDialog/ConfirmationDialog";
import { getNotes } from "../NotesDisplay/NotesDisplay";
export interface INotesProps {
  notes: INoteArray[];

  currentnote: ICurrentNoteArray[];

  clearnotes: any;
  savetextNotes: any;
  saveheaderNotes: any;
  fetchnotes: any;
  addnotes: any;
  getnotes: any;
  updatenotes: any;
}

interface INotesShowState {
  show: boolean;
}

class Notes extends Component<INotesProps> {
  state: INotesShowState = {
    show: false
  };

  addNotes = () => {
    //display alert if notes are empty
    if (
      this.props.currentnote[0].text != "" &&
      this.props.currentnote[0].heading != ""
    ) {
      this.props.addnotes(this.props.currentnote);
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

  savenotes = () => {
    if (this.props.notes.find(x => x.id === this.props.currentnote[0].id)) {
      updatenotes(this.props.currentnote);
      this.props.getnotes();
      this.setState({ show: false });
    }
  };

  OpenModel = () => {
    this.setState({ show: true });
  };

  CloseModel = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Fragment>
          {this.state.show ? (
            <ConfirmationDialog
              open={this.state.show}
              title={"Save"}
              description={"Are you sure you want to overwrite this note?"}
              onSubmit={this.savenotes}
              onClose={this.CloseModel}
            />
          ) : null}
          <NotesToolBar
            onAdd={this.addNotes}
            onClear={this.props.clearnotes}
            onSave={this.OpenModel}
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
    addnotes: (addednote: ICurrentNoteArray[]) => dispatch(addnotes(addednote)),
    updatenotes: (updatednote: ICurrentNoteArray[]) =>
      dispatch(updatenotes(updatednote)),
    getnotes: () => dispatch(getnotes())
  };
};

const mapStateToProps = (state: IAppState) => {
  return {
    notes: state.notes.items,
    currentnote: state.notes.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
