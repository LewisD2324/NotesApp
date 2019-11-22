import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";
import { INoteArray, INotesState, ICurrentNoteArray } from "../../App";
import { connect } from "react-redux";
import * as actioncreators from "../../store/actions/actions";

export interface INotesDisplayProps {
  notes: INoteArray[];
  selectnotes: any;
  currentnote: ICurrentNoteArray[];
}
class NotesDisplay extends Component<INotesDisplayProps> {
  selectNotes = (id: number) => {
    this.props.selectnotes(id);

    console.log(this.props.currentnote);
  };

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
      dispatch({ type: actioncreators.SELECT_NOTES, id })
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
