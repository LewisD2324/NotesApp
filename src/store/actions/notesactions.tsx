import { INoteArray, ICurrentNoteArray } from "../../App";
import {
  SAVE_TEXT_NOTES,
  SAVE_HEADER_NOTES,
  SELECT_NOTES,
  FETCH_NOTES,
  IActionClearNotes,
  CLEAR_NOTES,
  IActionSaveTextNotes,
  IActionSaveHeaderNotes,
  IActionSelectNotes,
  IActionFetchNotes,
  IActionCheckedNotes,
  CHECKED_NOTES,
  DELETE_NOTES
} from "./notesactiontypes";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { getNotes } from "../../containers/NotesDisplay/NotesDisplay";
import { functionExpression } from "@babel/types";
import firebase from "../../Firebase";
//action creators
export function clearnotes(): IActionClearNotes {
  return {
    type: CLEAR_NOTES
  };
}

export function savetextNotes(updatednote: string): IActionSaveTextNotes {
  return {
    type: SAVE_TEXT_NOTES,
    updatednote
  };
}

export function saveheaderNotes(updatednote: string): IActionSaveHeaderNotes {
  return {
    type: SAVE_HEADER_NOTES,
    updatednote
  };
}

export function deletenotes(notes: INoteArray[]) {
  return (dispatch: any) => {
    const db = firebase.firestore();

    notes.map(note => {
      db.collection("Notes")
        .doc(note.id)
        .delete()
        .catch((err: Error) => {
          console.log("Could not add note: ", err);
        });
    });

    dispatch(getnotes());
    dispatch(clearnotes());
  };
}
export function selectnotes(id: string): IActionSelectNotes {
  return {
    type: SELECT_NOTES,
    id
  };
}

export function checkednotes(
  selected: boolean,
  id: string
): IActionCheckedNotes {
  return {
    type: CHECKED_NOTES,
    selected,
    id
  };
}

export function fetchednotes(fetchedNotes: INoteArray[]): IActionFetchNotes {
  return {
    type: FETCH_NOTES,
    fetchedNotes
  };
}

export function getnotes() {
  return function(dispatch: any) {
    const db = firebase.firestore();

    let notes: INoteArray[] = [];
    db.collection("Notes")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          notes.push({
            heading: doc.get("heading"),
            id: doc.id,
            text: doc.get("text"),
            isselected: false
          });
        });

        dispatch(fetchednotes(notes));
      })
      .catch((err: Error) => {
        console.log("Error - Cannot Load Notes: ", err);
      });
  };
}

export function addnotes(addednote: ICurrentNoteArray[]) {
  return function(dispatch: any) {
    const db = firebase.firestore();

    db.collection("Notes")
      .add({
        heading: addednote[0].heading,
        text: addednote[0].text
      })
      .then(dispatch(getnotes()))
      .then(dispatch(clearnotes()))
      .catch((err: Error) => {
        console.log("Could not add note: ", err);
      });
  };
}

export function updatenotes(updatednote: ICurrentNoteArray[]) {
  // return (dispatch: any) => {
  const db = firebase.firestore();

  db.collection("Notes")
    .doc(updatednote[0].id)
    .update({
      heading: updatednote[0].heading,
      text: updatednote[0].text
    })
    .catch((err: Error) => {
      console.log("Could not update note: ", err);
    });
}

///////////////////////

//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
