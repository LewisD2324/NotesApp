import React, { Fragment, useState, useEffect } from "react";
import { INoteArray } from "../../models/state/notesState";
import { IAppState } from "../../models/state/appState";
import { useDispatch, useSelector } from "react-redux";
import { NotesActionTypeKeys } from "../../store/actions/notes/notesActionTypeKeys";
import * as actions from "../../store/actions/notes/notesActions";
import NotesTable from "../../components/UI/NotesTable/NotesTable";
import ConfirmationDialog from "../../components/UI/ConfirmationDialog/ConfirmationDialog";
import ErrorDialog from "../../components/UI/ErrorDialog/ErrorDialog";
const NotesDisplay: React.FC = () => {
  const dispatch = useDispatch();

  const selectnotes = (id: string) =>
    dispatch({ type: NotesActionTypeKeys.SELECT_NOTES, id });
  const checkednotes = (selected: boolean, id: string) =>
    dispatch({ type: NotesActionTypeKeys.CHECKED_NOTES, selected, id });
  const deletenotes = (notes: INoteArray[], userid: string | undefined) =>
    dispatch(actions.deleteNotes(notes, userid));
  const getnotes = (userid: string | undefined) =>
    dispatch(actions.getNotes(userid));
  const closeerror = () =>
    dispatch({ type: NotesActionTypeKeys.CLOSE_ERROR_DIALOG });
  const notes = useSelector((state: IAppState) => state.notes.items);

  const userid = useSelector((state: IAppState) => state.auth.userid);
  const noteserror = useSelector(
    (state: IAppState) => state.notes.errormessage
  );
  const showerror = useSelector((state: IAppState) => state.notes.isError);

  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const selectNotes = (id: string) => {
    selectnotes(id);
  };

  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkednotes(e.target.checked, e.target.value);
  };

  const onDeleteNotes = () => {
    const deletednotes = notes.filter(note => note.isselected === true);
    deletenotes(deletednotes, userid);

    setShowConfirm(false);
  };

  const OpenConfirmModel = () => {
    setShowConfirm(true);
  };

  const CloseConfirmModel = () => {
    setShowConfirm(false);
  };

  const CloseErrorModel = () => {
    closeerror();
  };

  useEffect(() => {
    getnotes(userid);
  }, []);

  return (
    <Fragment>
      {showConfirm ? (
        <ConfirmationDialog
          open={showConfirm}
          title={"Delete"}
          description={"Are you sure you want to Delete?"}
          onSubmit={onDeleteNotes}
          onClose={CloseConfirmModel}
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
      <NotesTable
        notes={notes}
        selectnotes={selectNotes}
        isChecked={onChecked}
        deletenotes={OpenConfirmModel}
      />
    </Fragment>
  );
};

export default NotesDisplay;
