import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  Component
} from "react";
import classes from "./Noting.module.css";
import { INoteArray } from "../../App";

interface INotingProps {
  // notes: INoteArray[];
  textchanged: any;
  currentnote: string;
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
          <input placeholder="Header:" type="text"></input>
          <br />
          <textarea
            className={classes.textarea}
            onChange={this.props.textchanged}
            value={this.props.currentnote}
          ></textarea>
        </form>
      </div>
    );
  }
}
//defaultValue={props.notes.find(x => x.value)}

export default Noting;
