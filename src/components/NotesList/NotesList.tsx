import React, { Component } from "react";
import classes from "./NotesList.module.css";
import { INoteArray, INotesState } from "../../App";
import Notes from "../../containers/Notes/Notes";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";

interface INotesListProps {
  notes: INoteArray[];
  //selectnotes()
  selectnotes: any;
}

const NotesList = (props: INotesListProps) => {
  return (
    <form className={classes.NotesList}>
      <table className={classes.NotesTable}>
        <tr>
          <th>Notes List:</th>
        </tr>
        <tbody>
          {props.notes.map(note => (
            <tr onClick={() => props.selectnotes(note.id)}>
              <td>{note.heading}</td>
              <td>{note.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default NotesList;
