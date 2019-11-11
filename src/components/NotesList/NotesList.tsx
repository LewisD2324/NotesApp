import React from "react";
import classes from "./NotesList.module.css";
const NotesList = (props: any) => (
  <form className={classes.NotesList}>
    <table>
      <tr>
        <th>Notes List:</th>
      </tr>
      <tr>
        <td>Note1</td>
      </tr>
      <tr>
        <td>Note2</td>
      </tr>
      <tr>
        <td>Note3</td>
      </tr>
      <tr>
        <td>Note4</td>
      </tr>
      <tr>
        <td>Note5</td>
      </tr>
    </table>
  </form>
);

export default NotesList;
