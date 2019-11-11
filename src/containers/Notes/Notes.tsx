import React, { Fragment } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import classes from "./Notes.module.css";
import Noting from "../../components/Noting/Noting";
const Notes = () => (
  <div className={classes.Notes}>
    <Fragment>
      <NotesToolBar />
      <Noting />
    </Fragment>
  </div>
);

export default Notes;
