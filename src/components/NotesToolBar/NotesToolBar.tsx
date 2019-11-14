import React from "react";
import classes from "./NotesToolBar.module.css";

interface INotesToolBarProps {
  onAdd(): void;
  //ingredientRemoved(type: string): void
}

const NotesToolBar = (props: INotesToolBarProps) => (
  <div className={classes.NotesToolBar}>
    <button onClick={props.onAdd}>Add</button>
    <button>Clear</button>
    <button>Edit</button>
    <button>Favourite</button>
  </div>
);

export default NotesToolBar;
