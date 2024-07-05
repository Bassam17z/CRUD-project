import React, { createContext, useState, useEffect } from "react";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  // useEffect to store data in a local storage
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    else {
      return JSON.parse(localValue);
    }
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(notes));
  }, [notes]);
  // function to add notes when the add button is pressed
  function AddNote(title, content) {
    setNotes((currentNotes) => {
      return [
        ...currentNotes,
        { id: crypto.randomUUID(), title, content, completed: false },
      ];
    });
  }
  // function to delete notes when the delete button is pressed
  function deleteNotes(id) {
    setNotes((currentNotes) => {
      return currentNotes.filter((note) => note.id !== id);
    });
  }
  // when the note title or update content button is pressed it will modify note content data
  function updateNoteContent(id, newContent) {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );
  }
  //function to update note title
  function updateNoteTitle(id, newTitle) {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  }
  //provider to use context
  return (
    <NotesContext.Provider
      value={{
        notes,
        AddNote,
        deleteNotes,
        updateNoteContent,
        updateNoteTitle,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
