import React from "react";
import classes from "./NotesControls.module.css";
import { Button, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

interface INotesControlsProps {
  onAdd(): void;
  onClear(): void;
  onSave(): void;
}

const NotesControls: React.FC<INotesControlsProps> = (
  props: INotesControlsProps
) => (
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
    <Button variant="contained" onClick={props.onSave}>
      Save
    </Button>
    <Button variant="contained" color="secondary" onClick={props.onClear}>
      Clear
    </Button>
  </div>
);

export default NotesControls;
