import { NotesState } from "../../models/state/notesState";
import { NoteActions } from "../actions/notes/notesActionTypes";
import { NotesActionTypeKeys } from "../actions/notes/notesActionTypeKeys";

const notesarray = [
  { id: "", heading: "", text: "", isselected: false, userid: "" }
];

const currentnotesarray = [{ id: "", heading: "", text: "" }];

const initialState: NotesState = {
  items: notesarray,
  currentnote: currentnotesarray,
  errormessage: "",
  isError: false
};

const notes = (
  state: NotesState = initialState,
  action: NoteActions
): NotesState => {
  console.log({ state, action });
  switch (action.type) {
    case NotesActionTypeKeys.CLEAR_NOTES:
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
    case NotesActionTypeKeys.ENTER_TEXT_NOTES:
      console.log({ state, action });
      const newupdatedtextState = { ...state };
      newupdatedtextState.currentnote = [
        {
          id: newupdatedtextState.currentnote[0].id,
          text: action.updatednote,
          heading: newupdatedtextState.currentnote[0].heading
        }
      ];
      return newupdatedtextState;
    case NotesActionTypeKeys.ENTER_HEADER_NOTES:
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
    case NotesActionTypeKeys.SELECT_NOTES:
      console.log({ state, action });
      const selectednote = state.items.filter(x => x.id === action.id);
      const newState = { ...state };
      newState.currentnote = [
        {
          id: selectednote[0].id,
          text: selectednote[0].text,
          heading: selectednote[0].heading
        }
      ];
      return newState;

    case NotesActionTypeKeys.CHECKED_NOTES:
      console.log({ state, action });
      return {
        ...state,
        items: state.items.map(note =>
          note.id === action.id
            ? { ...note, isselected: action.selected }
            : note
        )
      };
    case NotesActionTypeKeys.FETCH_NOTES:
      console.log({ state, action });
      return {
        ...state,
        items: action.fetchedNotes
      };
    case NotesActionTypeKeys.ERROR_NOTES:
      console.log({ state, action });
      return {
        ...state,
        errormessage: action.error
      };
    case NotesActionTypeKeys.CLOSE_ERROR_DIALOG:
      console.log({ state, action });
      return {
        ...state,
        errormessage: "",
        isError: false
      };

    default:
      return state;
  }
};

export default notes;
