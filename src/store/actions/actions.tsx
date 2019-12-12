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
  DELETE_NOTES,
  IActionDeleteNotes
} from "./types";
import axios from "../../axios.notes";
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

export function deletenotes(
  notes: INoteArray[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return await axios
      .delete("/Notes/" + notes.find(note => note.id) + ".json")
      .then(res => {
        dispatch(getnotes());
      })
      .catch((err: Error) => {
        console.log("Error deleting notes: ", err);
      });
    // setTimeout(() => {
    //   dispatch(clearnotes);
    // }, 1000);
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
    const fetchedNotes: INoteArray[] = [];

    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    let notes: any = [];
    db.collection("Notes")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          notes.push({
            ...doc.data(),
            isselected: false,
            id: doc.id
          });
        });
      });

    console.log(notes);

    axios
      .get("/Notes.json")
      .then(res => {
        for (let key in res.data) {
          fetchedNotes.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(fetchedNotes);

        fetchedNotes.forEach(function(element) {
          element.isselected = false;
        });

        dispatch(fetchednotes(notes));
      })
      .catch((err: Error) => {
        //Create Error action reponse for this
        console.log("Error - Cannot Load Notes: ", err);
      });
  };
}

export function addnotes(
  addednote: ICurrentNoteArray[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return await axios
      .post("/Notes.json", addednote)
      .then(res => {
        console.log("notes added: ", res.data);
        dispatch(getnotes());

        dispatch(clearnotes());
      })
      .catch((err: Error) => {
        console.log("Error adding note: ", err);
      });
    // setTimeout(() => {
    //   dispatch(clearnotes);
    // }, 1000);
  };
}

export function updatenotes(updatednote: ICurrentNoteArray[]) {
  axios
    .put("/Notes.json", updatednote)
    .then(res => {
      console.log("notes updated: ", res.data);
      //  dispatch(getnotes());
    })
    .catch((err: Error) => {
      console.log("Error updating note: ", err);
    });
  // setTimeout(() => {
  //   dispatch(clearnotes);
  // }, 1000);
}
