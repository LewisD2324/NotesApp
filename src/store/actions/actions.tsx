//action types
export const CLEAR_NOTES = "CLEAR_NOTES";
export const SAVE_TEXT_NOTES = "SAVE_TEXT_NOTES";
export const SAVE_HEADER_NOTES = "SAVE_HEADER_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const SELECT_NOTES = "SELECT_NOTES";

//action creators
export const clearnotes = () => {
  return {
    type: CLEAR_NOTES
  };
};

export const savetextNotes = (updatednote: string) => {
  return {
    type: SAVE_TEXT_NOTES,
    payload: updatednote
  };
};

export const saveheaderNotes = (updatednote: string) => {
  return {
    type: SAVE_HEADER_NOTES,
    payload: updatednote
  };
};

export const selectnotes = (id: number) => {
  return {
    type: SELECT_NOTES,
    payload: id
  };
};

export const addnotes = () => {
  return {
    type: ADD_NOTES
  };
};
