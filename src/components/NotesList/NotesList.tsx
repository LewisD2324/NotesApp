import React, { Component } from "react";
import classes from "./NotesList.module.css";
import { INoteArray } from "../../App";
import Notes from "../../containers/Notes/Notes";

interface INotesListProps {
  notes: INoteArray[];
}

const NotesList = (props: INotesListProps) => {
  return (
    <form className={classes.NotesList}>
      <table>
        <tr>
          <th>Notes List:</th>
        </tr>
        {props.notes.map(note => (
          <tr>
            <td>{note.heading}</td>
            <td>{note.value}</td>
          </tr>
        ))}
      </table>
    </form>
  );
};

export default NotesList;
