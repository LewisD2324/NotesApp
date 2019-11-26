import { Action } from "redux";
import { INoteArray } from "../../App";

//action types
export const CLEAR_NOTES = "CLEAR_NOTES";
export const SAVE_TEXT_NOTES = "SAVE_TEXT_NOTES";
export const SAVE_HEADER_NOTES = "SAVE_HEADER_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const SELECT_NOTES = "SELECT_NOTES";
export const FETCH_NOTES = "FETCH_NOTES";

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
  id: number;
}

export interface IActionFetchNotes extends Action {
  type: "FETCH_NOTES";
  fetchedNotes: INoteArray[];
}

export type NoteActions =
  | IActionClearNotes
  | IActionSaveTextNotes
  | IActionSaveHeaderNotes
  | IActionSelectNotes
  | IActionFetchNotes;
