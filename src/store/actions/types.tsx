import { Action } from "redux";
import { INoteArray, ICurrentNoteArray } from "../../App";

//action types
export const CLEAR_NOTES = "CLEAR_NOTES";
export const SAVE_TEXT_NOTES = "SAVE_TEXT_NOTES";
export const SAVE_HEADER_NOTES = "SAVE_HEADER_NOTES";
export const SELECT_NOTES = "SELECT_NOTES";
export const FETCH_NOTES = "FETCH_NOTES";
export const CHECKED_NOTES = "CHECKED_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";
export const AUTH_START = "AUTH_START";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const LOG_OUT = "LOG_OUT";


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

export interface IActionAuthFail extends Action {
  type: "AUTH_FAIL";
  error: string | null;
}

export interface IActionAuthSuccess extends Action {
  type: "AUTH_SUCCESS";
  userId: any;
  idToken: any;
}

export interface IActionAuthStart extends Action {
  type: "AUTH_START";
}
export type NoteActions =
  | IActionClearNotes
  | IActionSaveTextNotes
  | IActionSaveHeaderNotes
  | IActionSelectNotes
  | IActionFetchNotes
  | IActionCheckedNotes
  | IActionDeleteNotes
  | IActionAuthSuccess
  | IActionAuthFail
  | IActionAuthStart;
