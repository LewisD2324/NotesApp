import React, { Fragment, Component } from "react";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import Noting from "../../components/Noting/Noting";
import * as actiontypes from "../../store/actions/types";
import { INotesState, ICurrentNoteArray, INoteArray } from "../../App";
import { connect } from "react-redux";
import axios from "../../axios.notes";
import { getNotes } from "../NotesDisplay/NotesDisplay";
export interface INotesProps {
  notes: INoteArray[];

  currentnote: ICurrentNoteArray[];

  clearnotes: any;

  savetextNotes: any;

  saveheaderNotes: any;
  fetchnotes: any;
}
class Notes extends Component<INotesProps> {
  componentDidUpdate() {
    const fetchedNotes: INoteArray[] = [];
    axios
      .get("/Notes.json")
      .then(res => {
        for (let key in res.data) {
          fetchedNotes.push({
            ...res.data[key]
          });
        }
        console.log(fetchedNotes);
        this.props.fetchnotes(fetchedNotes);
      })
      .catch((err: Error) => {
        //Create error screen for this instead
        console.log("Error - Cannot Load Notes: ", err);
      });
  }
  addNotes = () => {
    //display alert if notes are empty
    if (
      this.props.currentnote[0].text != "" &&
      this.props.currentnote[0].heading != ""
    ) {
      axios
        .post("/Notes.json", this.props.currentnote[0])
        .then(res => {
          console.log("notes added");
        })
        .catch((err: Error) => {
          console.log("Error adding note: ", err);
        });
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
      <div>
        <Fragment>
          <NotesToolBar onAdd={this.addNotes} onClear={this.props.clearnotes} />
          <Noting
            textchanged={this.savetext}
            headerchanged={this.saveheader}
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
      dispatch({ type: actiontypes.FETCH_NOTES, fetchedNotes })
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
