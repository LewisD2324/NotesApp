import { INotesState } from "../../App";
import * as actionTypes from "../actions/actions";

const notesarray = [{ id: 0, heading: "test", value: "testing" }];

const currentnotesarray = [{ heading: "", value: "" }];

const initialState: INotesState = {
  notes: notesarray,
  currentnote: currentnotesarray
};

const reducer = (
  state: INotesState = initialState,
  action: any
): INotesState => {
  console.log({ state, action });
  switch (action.type) {
    case actionTypes.CLEAR_NOTES:
      console.log({ state, action });
      const newclearnotesState = { ...state };
      newclearnotesState.currentnote = [
        {
          value: "",
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
          value: action.updatednote,
          heading: newupdatedtextState.currentnote[0].heading
        }
      ];
      return newupdatedtextState;
    case actionTypes.SAVE_HEADER_NOTES:
      console.log({ state, action });
      const newupdatedheaderState = { ...state };
      newupdatedheaderState.currentnote = [
        {
          value: newupdatedheaderState.currentnote[0].value,
          heading: action.updatednote
        }
      ];
      return newupdatedheaderState;
    case actionTypes.ADD_NOTES:
      console.log({ state, action });
      const addednote = {
        id: state.notes.length + 1,
        heading: state.currentnote[0].heading,
        value: state.currentnote[0].value
      };
      const newnotelist = state.notes.concat([addednote]);
      return {
        ...state,
        notes: newnotelist
      };
    case actionTypes.SELECT_NOTES:
      console.log({ state, action });
      const selectednote = state.notes.filter(x => x.id == action.id);
      const newState = { ...state };
      newState.currentnote = [
        {
          value: selectednote[0].value,
          heading: selectednote[0].heading
        }
      ];

      return newState;
    default:
      return state;
  }
};

export default reducer;
