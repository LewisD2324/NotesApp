import { NotesActionTypeKeys } from "./notesActionTypeKeys";
import { Action } from "redux";
import { INoteArray } from "../../../models/state/notesState";

//ActionTypes

export interface INotesBaseAction extends Action {
  type: NotesActionTypeKeys;
}

export function isAction<A extends Action>(
  action: Action,
  type: string
): action is A {
  return action.type === type;
}

export interface IActionClearNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.CLEAR_NOTES;
}

export interface IActionSaveTextNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.ENTER_TEXT_NOTES;
  updatednote: string;
}

export interface IActionSaveHeaderNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.ENTER_HEADER_NOTES;
  updatednote: string;
}

export interface IActionSelectNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.SELECT_NOTES;
  id: string;
}

export interface IActionFetchNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.FETCH_NOTES;
  fetchedNotes: INoteArray[];
}
export interface IActionDeleteNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.DELETE_NOTES;
}

export interface IActionCheckedNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.CHECKED_NOTES;
  selected: boolean;
  id: string;
}

export interface IActionErrorNotes extends INotesBaseAction {
  type: NotesActionTypeKeys.ERROR_NOTES;
  error: string;
}
export interface IActionCloseErrorDialog extends INotesBaseAction {
  type: NotesActionTypeKeys.CLOSE_ERROR_DIALOG;
}

export type NoteActions =
  | IActionClearNotes
  | IActionSaveTextNotes
  | IActionSaveHeaderNotes
  | IActionSelectNotes
  | IActionFetchNotes
  | IActionCheckedNotes
  | IActionDeleteNotes
  | IActionErrorNotes
  | IActionCloseErrorDialog;
