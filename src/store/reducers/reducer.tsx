import { INotesState } from "../../App";
import { Action } from "redux";
import * as actionTypes from "../actions/actions";

const notesarray = [{ id: 0, heading: "test", value: "testing" }];

const currentnotesarray = [
  { heading: "", value: "" },
  { heading: "", value: "" }
];

const initialState: INotesState = {
  notes: notesarray,
  currentnote: "",
  currentnotenew: currentnotesarray
};

const reducer = (
  state: INotesState = initialState,
  action: any
): INotesState => {
  console.log({ state, action });
  switch (action.type) {
    case actionTypes.CLEAR_NOTES:
      console.log({ state, action });
      let currentnotestate = Object.assign({}, state.currentnote);
      currentnotestate = "";
      return {
        ...state,
        currentnote: currentnotestate
      };
    case actionTypes.SAVE_NOTES:
      console.log({ state, action });
      return {
        ...state,
        currentnote: action.updatednote
      };
    case actionTypes.ADD_NOTES:
      console.log({ state, action });
      const addednote = {
        id: state.notes.length + 1,
        heading: "Notes: " + (state.notes.length + 1),
        value: state.currentnote
      };
      const newnotelist = state.notes.concat([addednote]);
      return {
        ...state,
        notes: newnotelist
      };
    default:
      return state;
  }
};

// addNotes = () => {
//   if (this.props.currentnote != "") {
//     const addednote = {
//       id: this.props.notes.length + 1,
//       heading: "Notes: " + (this.props.notes.length + 1),
//       value: this.props.currentnote
//     };
//     const newnotelist = this.props.notes.concat([addednote]);
//     this.props.addnotes(newnotelist);
//   }
//   console.log(this.props.notes);
// };

export default reducer;
