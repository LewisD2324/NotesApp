import React from "react";
import classes from "./NotesToolBar.module.css";
import { Button, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

interface INotesToolBarProps {
  onAdd(): void;
  onClear(): void;
}

const NotesToolBar = (props: INotesToolBarProps) => (
  <div className={classes.NotesToolBar}>
    <Fab
      color="primary"
      aria-label="add"
      className={classes.fab}
      onClick={props.onAdd}
    >
      <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="edit" className={classes.fab}>
      <EditIcon />
    </Fab>
    <Button variant="contained" color="secondary" onClick={props.onClear}>
      Clear
    </Button>
    <Button variant="contained">Favourite</Button>
  </div>
);

export default NotesToolBar;
