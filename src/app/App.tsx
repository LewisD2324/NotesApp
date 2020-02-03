import React from "react";
import "./App.css";
import { Router, RouteComponentProps } from "@reach/router";
import NotesPage from "../containers/NotesPage/NotesPage";
import AuthPage from "../containers/AuthPage/AuthPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

const App: React.FC = () => {
  //do an isauthenticate mapstate to props here only
  return (
    <div className="App">
      <Router>
        <RouterPage path="/" pageComponent={<NotesPage />} />
        <RouterPage path="/Auth" pageComponent={<AuthPage />} />
      </Router>
    </div>
  );
};

export default App;
