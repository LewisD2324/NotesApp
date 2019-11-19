import React, { Fragment, Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotesList from "../../components/NotesList/NotesList";

//state here too to redux store
class NotesDisplay extends Component {
  render() {
    return <Fragment>{/* <SearchBar />
    <NotesList /> */}</Fragment>;
  }
}

export default NotesDisplay;
