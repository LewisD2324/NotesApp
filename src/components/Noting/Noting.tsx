import React, { Component } from "react";
import classes from "./Noting.module.css";
import { ICurrentNoteArray } from "../../App";

interface INotingProps {
  // notes: INoteArray[];
  textchanged: any;
  //need to fix these
  headervalue: any;
  textvalue: any;
  headerchanged: any;
}

// let textInput = React.createRef();

//  function handleClick() {
//  textInput.current.focus
// }

class Noting extends Component<INotingProps> {
  render() {
    return (
      <div className={classes.Noting}>
        <form>
          <input
            placeholder="Header: "
            type="text"
            onChange={this.props.headerchanged}
            value={this.props.headervalue}
          ></input>
          <br />
          <textarea
            placeholder="Write your notes here: "
            onChange={this.props.textchanged}
            value={this.props.textvalue}
          ></textarea>
        </form>
      </div>
    );
  }
}
//defaultValue={props.notes.find(x => x.value)}

export default Noting;
