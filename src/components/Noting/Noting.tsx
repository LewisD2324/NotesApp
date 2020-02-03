import React from "react";
import classes from "./Noting.module.css";

interface INotingProps {
  textchanged: (e: any) => void;
  headervalue: string;
  textvalue: string;
  headerchanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Noting: React.FC<INotingProps> = (props: INotingProps) => {
  return (
    <div className={classes.Noting}>
      <form>
        <input
          placeholder="Header: "
          type="text"
          onChange={props.headerchanged}
          value={props.headervalue}
        ></input>
        <br />
        <textarea
          placeholder="Write your notes here: "
          onChange={props.textchanged}
          value={props.textvalue}
        ></textarea>
      </form>
    </div>
  );
};

//defaultValue={props.notes.find(x => x.value)}

export default Noting;
