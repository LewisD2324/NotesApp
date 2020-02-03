import { NotesActionTypeKeys } from "./notesActionTypeKeys";
import {
  INoteArray,
  ICurrentNoteArray
} from "../../../models/state/notesState";
import {
  IActionClearNotes,
  IActionSaveTextNotes,
  IActionSaveHeaderNotes,
  IActionSelectNotes,
  IActionFetchNotes,
  IActionCheckedNotes,
  IActionErrorNotes,
  IActionCloseErrorDialog
} from "..//notes/notesActionTypes";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "../../../config/Firebase";

//action creators
export const clearNotes = (): IActionClearNotes => {
  return {
    type: NotesActionTypeKeys.CLEAR_NOTES
  };
};

export const closeerror = (): IActionCloseErrorDialog => {
  return {
    type: NotesActionTypeKeys.CLOSE_ERROR_DIALOG
  };
};

export const enterTextNotes = (updatednote: string): IActionSaveTextNotes => {
  return {
    type: NotesActionTypeKeys.ENTER_TEXT_NOTES,
    updatednote
  };
};

export const enterHeaderNotes = (
  updatednote: string
): IActionSaveHeaderNotes => {
  return {
    type: NotesActionTypeKeys.ENTER_HEADER_NOTES,
    updatednote
  };
};

export const selectNotes = (id: string): IActionSelectNotes => {
  return {
    type: NotesActionTypeKeys.SELECT_NOTES,
    id
  };
};

export const checkedNotes = (
  selected: boolean,
  id: string
): IActionCheckedNotes => {
  return {
    type: NotesActionTypeKeys.CHECKED_NOTES,
    selected,
    id
  };
};

export const fetchedNotes = (fetchedNotes: INoteArray[]): IActionFetchNotes => {
  return {
    type: NotesActionTypeKeys.FETCH_NOTES,
    fetchedNotes
  };
};

export const errorNotes = (error: string): IActionErrorNotes => {
  return {
    type: NotesActionTypeKeys.ERROR_NOTES,
    error
  };
};

export const deleteNotes = (
  notes: INoteArray[],
  userid: string | undefined
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      await notes.map(note => {
        firebase
          .firestore()
          .collection("Notes")
          .doc(note.id)
          .delete();
      });

      dispatch(getNotes(userid));
      dispatch(clearNotes());
    } catch (error) {
      dispatch(errorNotes(error));
      console.log("Could not add note: ", error);
    }
  };
};

export const getNotes = (
  userid: string | undefined
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      let notes: INoteArray[] = [];
      await firebase
        .firestore()
        .collection("Notes")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            notes.push({
              heading: doc.get("heading"),
              id: doc.id,
              text: doc.get("text"),
              isselected: false,
              userid: doc.get("userid")
            });
          });
        });
      const usernotes = notes.filter(n => n.userid === userid);

      dispatch(fetchedNotes(usernotes));
    } catch (error) {
      dispatch(errorNotes(error));
      console.log("Error - Cannot Load Notes: ", error);
    }
  };
};

export const addNotes = (
  addednote: ICurrentNoteArray[],
  userid: string | undefined
): ThunkAction<void, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      await firebase
        .firestore()
        .collection("Notes")
        .add({
          heading: addednote[0].heading,
          text: addednote[0].text,
          userid: userid
        });
      dispatch(getNotes(userid));
      dispatch(clearNotes());
    } catch (error) {
      dispatch(errorNotes(error));
      console.log("Could not add note: ", error);
    }
  };
};

export const updateNotes = (
  updatednote: ICurrentNoteArray[],
  userid: string | undefined
) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      await firebase
        .firestore()
        .collection("Notes")
        .doc(updatednote[0].id)
        .update({
          heading: updatednote[0].heading,
          text: updatednote[0].text
        });

      dispatch(getNotes(userid));
    } catch (error) {
      dispatch(errorNotes(error));
      console.log("Could not update note: ", error);
    }
  };
};
