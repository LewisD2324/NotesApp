import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";
import {
  INoteArray,
  NotesState,
  ICurrentNoteArray,
  IAppState
} from "../../App";
import { connect } from "react-redux";
import * as actiontypes from "../../store/actions/notesactiontypes";
import * as _ from "lodash";
import {
  getnotes,
  checkednotes,
  deletenotes
} from "../../store/actions/notesactions";
import MaterialTable from "../UI/MaterialTable/MaterialTable";
import MaterialDrawer from "../UI/MaterialDrawer/MaterialDrawer";
import ConfirmationDialog from "../UI/ConfirmationDialog/ConfirmationDialog";
export interface INotesDisplayProps {
  notes: INoteArray[];
  selectnotes: any;
  fetchnotes: any;
  getnotes: any;
  checkednotes: any;
  currentnote: ICurrentNoteArray[];
  deletenotes: any;
}

interface INotesDisplayState {
  show: boolean;
}

export function getNotes(props: INotesDisplayProps) {
  props.getnotes();
}

class NotesDisplay extends Component<INotesDisplayProps> {
  // constructor(props: INotesDisplayProps) {
  //   super(props);
  //   this.state = {
  //     show: true
  //   };
  // }

  state: INotesDisplayState = {
    show: false
  };
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
    const deletednotes = this.props.notes.filter(
      note => note.isselected == true
    );
    this.props.deletenotes(deletednotes);

    this.setState({ show: false });
  };

  OpenModel = () => {
    this.setState({ show: true });
  };

  CloseModel = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    getNotes(this.props);
    console.log(this.props.notes);
  }

  render() {
    return (
      <Fragment>
        {this.state.show ? (
          <ConfirmationDialog
            open={this.state.show}
            title={"Delete"}
            description={"Are you sure you want to Delete?"}
            onSubmit={this.onDeleteNotes}
            onClose={this.CloseModel}
          />
        ) : null}
        {/* <SearchBar /> */}
        <MaterialTable
          notes={this.props.notes}
          selectnotes={this.selectNotes}
          isChecked={this.onChecked}
          deletenotes={this.OpenModel}
        />
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

const mapStateToProps = (state: IAppState) => {
  return {
    notes: state.notes.items,
    currentnote: state.notes.currentnote
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesDisplay);
