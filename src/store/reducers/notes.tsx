import { NotesState } from "../../App";
import * as actionTypes from "../actions/notesactiontypes";
import { NoteActions } from "../actions/notesactiontypes";

const notesarray = [
  { id: "", heading: "", text: "", isselected: false, userid: "" }
];

const currentnotesarray = [{ id: "", heading: "", text: "" }];

const initialState: NotesState = {
  items: notesarray,
  currentnote: currentnotesarray
};

const notes = (
  state: NotesState = initialState,
  action: NoteActions
): NotesState => {
  console.log({ state, action });
  switch (action.type) {
    case actionTypes.CLEAR_NOTES:
      console.log({ state, action });
      const newclearnotesState = { ...state };
      newclearnotesState.currentnote = [
        {
          id: newclearnotesState.currentnote[0].id,
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
      const selectednote = state.items.filter(x => x.id == action.id);
      const newState = { ...state };
      newState.currentnote = [
        {
          id: selectednote[0].id,
          text: selectednote[0].text,
          heading: selectednote[0].heading
        }
      ];

      return newState;

    case actionTypes.CHECKED_NOTES:
      console.log({ state, action });

      return {
        ...state,
        items: state.items.map(note =>
          note.id == action.id ? { ...note, isselected: action.selected } : note
        )
      };
    case actionTypes.FETCH_NOTES:
      console.log({ state, action });
      return {
        ...state,
        items: action.fetchedNotes
      };

    default:
      return state;
  }
};

export default notes;
