import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";
import { INoteArray, INotesState, ICurrentNoteArray } from "../../App";
import { connect } from "react-redux";
import * as actiontypes from "../../store/actions/types";
import axios from "../../axios.notes";
import * as _ from "lodash";
import { getnotes } from "../../store/actions/actions";

export interface INotesDisplayProps {
  notes: INoteArray[];
  selectnotes: any;
  fetchnotes: any;
  getnotes: any;

  currentnote: ICurrentNoteArray[];
}

export function getNotes(props: INotesDisplayProps) {
  props.getnotes();
}

class NotesDisplay extends Component<INotesDisplayProps> {
  selectNotes = (id: number) => {
    this.props.selectnotes(id);

    console.log(this.props.currentnote);
  };

  // shouldComponentUpdate(nextProps: INotesDisplayProps) {
  //   return nextProps.notes !== this.props.notes;
  // }

  // componentDidUpdate(prevProps: INotesDisplayProps) {
  //   if (prevProps.notes.length !== this.props.notes.length) {
  //     //getNotes(this.props);
  //     console.log("getting notes not equal length");
  //     return;
  //   }

  //   _.orderBy(prevProps.notes, ["id"]).forEach(note => {
  //     _.orderBy(this.props.notes, ["id"]).forEach(n => {
  //       if (!_.isEqual(note, n)) {
  //         //getNotes(this.props);
  //         console.log("getting notes");
  //         return;
  //       }
  //     });
  //   });

  //   //this.props.notes.xorWith(prevProps.notes, _.isEqual).isEmpty();
  //   //if (this.props.notes !== prevProps.notes) {
  // }

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
      dispatch({ type: actiontypes.FETCH_NOTES, fetchedNotes }),
    getnotes: () => dispatch(getnotes())
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
