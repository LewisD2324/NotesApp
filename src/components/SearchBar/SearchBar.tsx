import React from "react";
import classes from "./SearchBar.module.css";
const SearchBar = (props: any) => (
  <form className={classes.SearchBar}>
    <input type="text" placeholder="Search"></input>
  </form>
);

export default SearchBar;
