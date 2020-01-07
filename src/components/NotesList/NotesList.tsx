import React, { Component } from "react";
import classes from "./NotesList.module.css";
import { INoteArray, NotesState } from "../../App";
import {
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";

interface INotesListProps {
  notes: INoteArray[];
  //selectnotes()
  selectnotes: any;
}

const NotesList = (props: INotesListProps) => {
  return (
    <Paper className={classes.NotesList}>
      <Table className={classes.NotesTable}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.notes.map(row => {
            return (
              <TableRow key={row.id} onClick={() => props.selectnotes(row.id)}>
                <TableCell scope="row">{row.heading}</TableCell>
                <TableCell>{row.text}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default NotesList;
