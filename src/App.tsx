import React, { Fragment } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Notes from "./containers/Notes/Notes";
import NotesList from "./components/NotesList/NotesList";
import NotesDisplay from "./containers/NotesDisplay/NotesDisplay";
const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <strong>Welcome to you're Notes App!</strong>
      </header>
      <section>
        <NotesDisplay />
        <Notes />
      </section>
    </div>
  );
};

export default App;
