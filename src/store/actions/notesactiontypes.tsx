import { Action } from "redux";
import { INoteArray, ICurrentNoteArray } from "../../App";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  SIGNUP_SUCCESS,
  IActionSignUpFail,
  IActionSignUpSuccess,
  SIGNUP_FAIL
} from "./authactiontypes";

//action types
export const CLEAR_NOTES = "CLEAR_NOTES";
export const SAVE_TEXT_NOTES = "SAVE_TEXT_NOTES";
export const SAVE_HEADER_NOTES = "SAVE_HEADER_NOTES";
export const SELECT_NOTES = "SELECT_NOTES";
export const FETCH_NOTES = "FETCH_NOTES";
export const CHECKED_NOTES = "CHECKED_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";

//ActionTypes

export function isAction<A extends Action>(
  action: Action,
  type: string
): action is A {
  return action.type === type;
}

export interface IActionClearNotes extends Action {
  type: "CLEAR_NOTES";
}

export interface IActionSaveTextNotes extends Action {
  type: "SAVE_TEXT_NOTES";
  updatednote: string;
}

export interface IActionSaveHeaderNotes extends Action {
  type: "SAVE_HEADER_NOTES";
  updatednote: string;
}

export interface IActionSelectNotes extends Action {
  type: "SELECT_NOTES";
  id: string;
}

export interface IActionFetchNotes extends Action {
  type: "FETCH_NOTES";
  fetchedNotes: INoteArray[];
}
export interface IActionDeleteNotes extends Action {
  type: "DELETE_NOTES";
}

export interface IActionCheckedNotes extends Action {
  type: "CHECKED_NOTES";
  selected: boolean;
  id: string;
}

export type NoteActions =
  | IActionClearNotes
  | IActionSaveTextNotes
  | IActionSaveHeaderNotes
  | IActionSelectNotes
  | IActionFetchNotes
  | IActionCheckedNotes
  | IActionDeleteNotes;
