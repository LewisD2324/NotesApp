import * as actiontypes from "../actions/types";
import { NoteActions } from "../actions/types";
import { AuthState } from "../../App";

const initialState: AuthState = {
  token: "",
  userId: "null",
  error: null,
  loading: false
};

export function reducer(state = initialState, action: NoteActions): AuthState {
  switch (action.type) {
    case actiontypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actiontypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
      };
    case actiontypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export default reducer;
