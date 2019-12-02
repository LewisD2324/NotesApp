import { INoteArray, ICurrentNoteArray } from "../../App";
import {
  SAVE_TEXT_NOTES,
  SAVE_HEADER_NOTES,
  SELECT_NOTES,
  ADD_NOTES,
  FETCH_NOTES,
  IActionClearNotes,
  CLEAR_NOTES,
  IActionSaveTextNotes,
  IActionSaveHeaderNotes,
  IActionSelectNotes,
  IActionFetchNotes,
  IActionAddNotes
} from "./types";
import axios from "../../axios.notes";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { getNotes } from "../../containers/NotesDisplay/NotesDisplay";

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

export function selectnotes(id: number): IActionSelectNotes {
  return {
    type: SELECT_NOTES,
    id
  };
}

export function fetchednotes(
  fetchedNotes: INoteArray[],
  id: number
): IActionFetchNotes {
  return {
    type: FETCH_NOTES,
    fetchedNotes,
    id
  };
}

export function getnotes() {
  return function(dispatch: any) {
    const fetchedNotes: INoteArray[] = [];
    let id = 0;
    axios
      .get("/Notes.json")
      .then(res => {
        for (let key in res.data) {
          fetchedNotes.push({
            ...res.data[key]
          });
        }
        for (var i = 0; i < fetchedNotes.length + 1; i++) {
          id = Number(i) + 1;
        }
        dispatch(fetchednotes(fetchedNotes, id));
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
