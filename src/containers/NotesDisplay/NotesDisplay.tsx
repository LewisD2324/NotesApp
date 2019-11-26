import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";
import { INoteArray, INotesState, ICurrentNoteArray } from "../../App";
import { connect } from "react-redux";
import * as actiontypes from "../../store/actions/types";
import axios from "../../axios.notes";
export interface INotesDisplayProps {
  notes: INoteArray[];
  selectnotes: any;
  fetchnotes: any;
  currentnote: ICurrentNoteArray[];
}

export function getNotes(props: INotesDisplayProps) {
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
      props.fetchnotes(fetchedNotes);
    })
    .catch((err: Error) => {
      //Create error screen for this instead
      console.log("Error - Cannot Load Notes: ", err);
    });
}

class NotesDisplay extends Component<INotesDisplayProps> {
  selectNotes = (id: number) => {
    this.props.selectnotes(id);

    console.log(this.props.currentnote);
  };

  componentDidMount() {
    const fetchedNotes: INoteArray[] = [];
    getNotes(this.props);
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <NotesList notes={this.props.notes} selectnotes={this.selectNotes} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectnotes: (id: number) =>
      dispatch({ type: actiontypes.SELECT_NOTES, id }),
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

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
