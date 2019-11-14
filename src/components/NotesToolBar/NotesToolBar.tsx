import React from "react";
import classes from "./NotesToolBar.module.css";

interface INotesToolBarProps {
  onAdd(): void;
  onClear(): void;
}

const NotesToolBar = (props: INotesToolBarProps) => (
  <div className={classes.NotesToolBar}>
    <button onClick={props.onAdd}>Add</button>
    <button onClick={props.onClear}>Clear</button>
    <button>Edit</button>
    <button>Favourite</button>
  </div>
);

export default NotesToolBar;
