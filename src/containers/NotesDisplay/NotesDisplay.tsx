import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";
import { INoteArray, INotesState, ICurrentNoteArray } from "../../App";
import { connect } from "react-redux";
import * as actiontypes from "../../store/actions/types";
import * as _ from "lodash";
import {
  getnotes,
  checkednotes,
  deletenotes
} from "../../store/actions/actions";
import MaterialTable from "../UI/MaterialTable/MaterialTable";
import MaterialDrawer from "../UI/MaterialDrawer/MaterialDrawer";
export interface INotesDisplayProps {
  notes: INoteArray[];
  selectnotes: any;
  fetchnotes: any;
  getnotes: any;
  checkednotes: any;
  currentnote: ICurrentNoteArray[];
  deletenotes: any;
}

export function getNotes(props: INotesDisplayProps) {
  props.getnotes();
}

class NotesDisplay extends Component<INotesDisplayProps> {
  selectNotes = (id: string) => {
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

  onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const id = e.target.value;

    console.log(checked, id);
    this.props.checkednotes(checked, id);
    console.log(this.props.notes);
  };

  onDeleteNotes = () => {
    //finish this when we change firestore to cloud firestore version
    const deletednotes = this.props.notes.find(note => note.isselected == true);
    let id: string = "";
    for (let i = 0; i < this.props.notes.length + 1; i++) {
      if (this.props.notes[i].isselected == true) {
        id = this.props.notes[i].id;
      }
    }
    console.log(deletednotes, id);
    //this.props.deletenotes(deletednotes);
  };

  componentDidMount() {
    const fetchedNotes: INoteArray[] = [];
    getNotes(this.props);
    console.log(this.props.notes);
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <MaterialDrawer />
        <MaterialTable
          notes={this.props.notes}
          selectnotes={this.selectNotes}
          isChecked={this.onChecked}
          deletenotes={this.onDeleteNotes}
        />

        {/* <NotesList notes={this.props.notes} selectnotes={this.selectNotes} /> */}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectnotes: (id: string) =>
      dispatch({ type: actiontypes.SELECT_NOTES, id }),
    fetchnotes: (fetchedNotes: INoteArray[]) =>
      dispatch({ type: actiontypes.FETCH_NOTES, fetchedNotes }),
    getnotes: () => dispatch(getnotes()),
    checkednotes: (selected: boolean, id: string) =>
      dispatch({ type: actiontypes.CHECKED_NOTES, selected, id }),
    deletenotes: (notes: INoteArray[]) => dispatch(deletenotes(notes))
  };
};

const mapStateToProps = (state: INotesState) => {
  return {
    notes: state.notes,
    currentnote: state.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
