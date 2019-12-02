import { INotesState } from "../../App";
import * as actionTypes from "../actions/types";
import { NoteActions } from "../actions/types";

const notesarray = [{ id: 0, heading: "test", text: "testing" }];

const currentnotesarray = [{ id: 0, heading: "", text: "" }];

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
        { id: newclearnotesState.currentnote[0].id, text: "", heading: "" }
      ];
      return newclearnotesState;
    case actionTypes.SAVE_TEXT_NOTES:
      console.log({ state, action });
      const newupdatedtextState = { ...state };
      console.log(newupdatedtextState);
      newupdatedtextState.currentnote = [
        {
          id: newupdatedtextState.currentnote[0].id,
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
          id: newupdatedheaderState.currentnote[0].id,
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
          id: selectednote[0].id,
          text: selectednote[0].text,
          heading: selectednote[0].heading
        }
      ];

      return newState;

    case actionTypes.FETCH_NOTES:
      console.log({ state, action });
      const newnoteState = { ...state };

      newnoteState.currentnote = [
        {
          id: action.id,
          text: newnoteState.currentnote[0].text,
          heading: newnoteState.currentnote[0].heading
        }
      ];

      return {
        ...state,
        notes: action.fetchedNotes,
        currentnote: newnoteState.currentnote
      };
    default:
      return state;
  }
};

export default reducer;
