import { useState, useContext } from "react";
import NotesContext from "./NotesContext";
// Component for the form to add new notes
export default function NoteForm() {
  const [newItem, SetNewItem] = useState("");
  const { AddNote } = useContext(NotesContext);
  // Handle form submission to add a new note
  function handleSubmit(e) {
    e.preventDefault();
    AddNote(newItem);
    SetNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className={newItem ? "filled" : ""}>
          Add new Note
        </label>
        <input
          onChange={(e) => SetNewItem(e.target.value)}
          value={newItem}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
