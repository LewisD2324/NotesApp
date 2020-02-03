import React, { useState } from "react";
import NotesToolBar from "../../components/NotesControls/NotesControls";
import Noting from "../../components/Noting/Noting";
import { NotesActionTypeKeys } from "../../store/actions/notes/notesActionTypeKeys";
import { ICurrentNoteArray } from "../../models/state/notesState";
import { IAppState } from "../../models/state/appState";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/notes/notesActions";
import ConfirmationDialog from "../../components/UI/ConfirmationDialog/ConfirmationDialog";
import ErrorDialog from "../../components/UI/ErrorDialog/ErrorDialog";

const Notes: React.FC = () => {
  const dispatch = useDispatch();
  const clearnotes = () => dispatch({ type: NotesActionTypeKeys.CLEAR_NOTES });
  const savetextNotes = (updatednote: string) =>
    dispatch({ type: NotesActionTypeKeys.ENTER_TEXT_NOTES, updatednote });
  const saveheaderNotes = (updatednote: string) =>
    dispatch({ type: NotesActionTypeKeys.ENTER_HEADER_NOTES, updatednote });

  const addnotes = (
    addednote: ICurrentNoteArray[],
    userid: string | undefined
  ) => dispatch(actions.addNotes(addednote, userid));
  const updatenotes = (
    updatednote: ICurrentNoteArray[],
    userid: string | undefined
  ) => dispatch(actions.updateNotes(updatednote, userid));

  const closeerror = () =>
    dispatch({ type: NotesActionTypeKeys.CLOSE_ERROR_DIALOG });

  const notes = useSelector((state: IAppState) => state.notes.items);
  const currentnote = useSelector(
    (state: IAppState) => state.notes.currentnote
  );
  const userid = useSelector((state: IAppState) => state.auth.userid);
  const noteserror = useSelector(
    (state: IAppState) => state.notes.errormessage
  );
  const showerror = useSelector((state: IAppState) => state.notes.isError);
  const [show, setshow] = useState<boolean>(false);

  const addNotes = () => {
    if (currentnote[0].text !== "" && currentnote[0].heading !== "") {
      addnotes(currentnote, userid);
    }
  };

  const enterText = (changed: React.ChangeEvent<HTMLInputElement>) => {
    savetextNotes(changed.target.value);
  };

  const enterHeader = (changed: React.ChangeEvent<HTMLInputElement>) => {
    saveheaderNotes(changed.target.value);
  };

  const savenotes = () => {
    if (notes.find(x => x.id === currentnote[0].id)) {
      updatenotes(currentnote, userid);
      setshow(false);
    }
  };

  const OpenModel = () => {
    setshow(true);
  };

  const CloseModel = () => {
    setshow(false);
  };

  const CloseErrorModel = () => {
    closeerror();
  };

  return (
    <div>
      {show ? (
        <ConfirmationDialog
          open={show}
          title={"Save"}
          description={"Are you sure you want to overwrite this note?"}
          onSubmit={savenotes}
          onClose={CloseModel}
        />
      ) : null}
      {showerror ? (
        <ErrorDialog
          open={showerror}
          title={"Error"}
          description={noteserror}
          onClose={CloseErrorModel}
        />
      ) : null}
      <NotesToolBar onAdd={addNotes} onClear={clearnotes} onSave={OpenModel} />
      <Noting
        textchanged={enterText}
        headerchanged={enterHeader}
        textvalue={currentnote[0].text}
        headervalue={currentnote[0].heading}
      />
    </div>
  );
};

export default Notes;
