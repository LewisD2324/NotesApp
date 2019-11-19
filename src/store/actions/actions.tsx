import { INoteArray } from "../../App";

//action types
export const CLEAR_NOTES = "CLEAR_NOTES";
export const SAVE_NOTES = "SAVE_NOTES";
export const ADD_NOTES = "ADD_NOTES";

//action creators
export const clearnotes = () => {
  return {
    type: CLEAR_NOTES
  };
};

export const savenotes = (currentnote: string) => {
  return {
    type: SAVE_NOTES,
    payload: currentnote
  };
};

export const addnotes = () => {
  return {
    type: ADD_NOTES
    // ,
    // payload: newnoteslist
  };
};
