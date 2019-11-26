import { INotesState } from "../../App";
import * as actionTypes from "../actions/types";
import { NoteActions } from "../actions/types";

const notesarray = [{ id: 0, heading: "test", text: "testing" }];

const currentnotesarray = [{ heading: "", text: "" }];

const initialState: INotesState = {
  notes: notesarray,
  currentnote: currentnotesarray
};

const reducer = (
  state: INotesState = initialState,
  action: NoteActions
): INotesState => {
  console.log({ state, action });
  switch (action.type) {
    case actionTypes.CLEAR_NOTES:
      console.log({ state, action });
      const newclearnotesState = { ...state };
      newclearnotesState.currentnote = [
        {
          text: "",
          heading: ""
        }
      ];
      return newclearnotesState;
    case actionTypes.SAVE_TEXT_NOTES:
      console.log({ state, action });
      const newupdatedtextState = { ...state };
      console.log(newupdatedtextState);
      newupdatedtextState.currentnote = [
        {
          text: action.updatednote,
          heading: newupdatedtextState.currentnote[0].heading
        }
      ];
      return newupdatedtextState;
    case actionTypes.SAVE_HEADER_NOTES:
      console.log({ state, action });
      const newupdatedheaderState = { ...state };
      newupdatedheaderState.currentnote = [
        {
          text: newupdatedheaderState.currentnote[0].text,
          heading: action.updatednote
        }
      ];
      return newupdatedheaderState;
    case actionTypes.SELECT_NOTES:
      console.log({ state, action });
      const selectednote = state.notes.filter(x => x.id == action.id);
      const newState = { ...state };
      newState.currentnote = [
        {
          text: selectednote[0].text,
          heading: selectednote[0].heading
        }
      ];

      return newState;

    case actionTypes.FETCH_NOTES:
      console.log({ state, action });
      return {
        ...state,
        notes: action.fetchedNotes
      };
    default:
      return state;
  }
};

export default reducer;
