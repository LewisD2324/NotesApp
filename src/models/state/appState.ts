import { AuthState } from "./authState";
import { NotesState } from "./notesState";

export interface IAppState {
  auth: AuthState;
  notes: NotesState;
}
