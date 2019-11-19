import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesToolBar from "../../components/NotesToolBar/NotesToolBar";
import classes from "./Notes.module.css";
import Noting from "../../components/Noting/Noting";

//handlers go here
class Notes extends Component {
  render() {
    return (
      <div className={classes.Notes}>
        {/* <Fragment>
        <NotesToolBar />
        <Noting />
      </Fragment> */}
      </div>
    );
  }
}

export default Notes;
