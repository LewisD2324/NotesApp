import React from "react";
import NotesDisplay from "../NotesDisplay/NotesDisplay";
import Notes from "../Notes/Notes";

interface INotesPageProps {
  path: string;
}

const NotesPage = (props: INotesPageProps) => {
  return (
    <div>
      <NotesDisplay />
      <Notes />
    </div>
  );
};

export default NotesPage;
