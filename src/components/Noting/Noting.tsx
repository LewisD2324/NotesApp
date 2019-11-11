import React from "react";
import classes from "./Noting.module.css";

const Noting = (props: any) => (
  <div className={classes.Noting}>
    <form>
      <input placeholder="Header:" type="text">
        {props.headername}
      </input>
      <br />
      <input placeholder="Enter notes here" type="text">
        {props.notestext}
      </input>
    </form>
  </div>
);

export default Noting;
