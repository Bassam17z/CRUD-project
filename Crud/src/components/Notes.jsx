import React, { useContext } from "react";
import NotesContext from "./NotesContext";
import NoteItem from "./NoteItem";
// Component to display the list of notes
export default function Notes() {
  // Extract notes, deleteNotes, and updateNote functions from NotesContext
  const { notes, deleteNotes, updateNote } = useContext(NotesContext);
  return (
    <ul className="list">
      {notes.length === 0 && " no current notes"}
      {notes.map((note) => {
        return (
          <NoteItem
            {...note}
            key={note.id}
            deleteNotes={deleteNotes}
            updateNote={updateNote}
          />
        );
      })}
    </ul>
  );
}
