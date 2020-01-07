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
  IActionDeleteNotes,
  AUTH_SUCCESS,
  IActionAuthSuccess,
  IActionAuthFail,
  AUTH_FAIL,
  IActionAuthStart,
  AUTH_START,
  LOG_OUT
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

export function deletenotes(notes: INoteArray[]) {
  return (dispatch: any) => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
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
    db.settings({
      timestampsInSnapshots: true
    });

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
    db.settings({
      timestampsInSnapshots: true
    });
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
  db.settings({
    timestampsInSnapshots: true
  });
  db.collection("Notes")
    .doc(updatednote[0].id)
    .update({
      heading: updatednote[0].heading,
      text: updatednote[0].text
    })
    .catch((err: Error) => {
      console.log("Could not update note: ", err);
    });

  //  dispatch(getnotes());
}

export function logout() {
  return {
    type: LOG_OUT
  };
}

export function checkAuthTimeout(expirationTime: number) {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
}

export function authSuccess(userId: any, idToken: any): IActionAuthSuccess {
  return {
    type: AUTH_SUCCESS,
    userId,
    idToken
  };
}

export function authFail(error: string | null): IActionAuthFail {
  return {
    type: AUTH_FAIL,
    error
  };
}

export function authStart(): IActionAuthStart {
  return {
    type: AUTH_START
  };
}

export async function auth(email: string, password: string) {
  return async (dispatch: any) => {
    dispatch(authStart());
    let userId: string | undefined = "";

    try {
      const authToken = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(authToken);
      if (!authToken.user) return;

      userId = authToken.user?.uid;

      const Idtoken = await authToken.user.getIdTokenResult(true);

      const expirationTime: number = Number(Idtoken.expirationTime);

      dispatch(authSuccess(userId, Idtoken.token));
      dispatch(checkAuthTimeout(expirationTime));
    } catch (error) {
      dispatch(authFail(error.message));
    }
  };
}

export function signin(email: string, password: string) {
  return (dispatch: any) => {
    dispatch(authStart());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        // const idToken = response.user?.getIdToken;
        // const userId = response.user?.uid;

        // dispatch(authSuccess(userId, idToken));
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  };
}

//https://heartbeat.fritz.ai/how-to-build-an-email-authentication-app-with-firebase-firestore-and-react-native-a18a8ba78574
