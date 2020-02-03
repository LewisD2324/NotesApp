export interface INoteArray {
  heading: string;
  text: string;
  id: string;
  userid: string;
  isselected: boolean;
}

export interface ICurrentNoteArray {
  id: string;
  heading: string;
  text: string;
}

export interface NotesState {
  items: INoteArray[];
  currentnote: ICurrentNoteArray[];
  errormessage: string;
  isError: boolean;
}
