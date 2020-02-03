import React from "react";
import NotesDisplay from "../NotesDisplay/NotesDisplay";
import Notes from "../Notes/Notes";
import MaterialUIToolbar from "../../components/UI/NotesToolBar/NotesToolBar";
import { IAppState } from "../../models/state/appState";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/auth/authActions";
import { Redirect } from "@reach/router";

const NotesPage: React.FC = () => {
  const dispatch = useDispatch();

  const signout = async () => dispatch(await actions.signout());
  const isAuthenticated = useSelector(
    (state: IAppState) => state.auth.isAuthenticated
  );

  const logoutHandler = () => {
    signout();
  };
  let authRedirect = null;
  if (!isAuthenticated) {
    authRedirect = <Redirect noThrow to="/Auth" />;
  }

  return (
    <div>
      {authRedirect}
      <MaterialUIToolbar logout={logoutHandler} />
      <NotesDisplay />
      <Notes />
    </div>
  );
};

export default NotesPage;
