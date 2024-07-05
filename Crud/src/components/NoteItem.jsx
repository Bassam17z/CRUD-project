import { useContext, useState } from "react";
import NotesContext from "./NotesContext";
import EditModal from "./EditModal";
// Component to render an individual note item with edit and delete functionality

export default function NoteItem({ id, title, content, deleteNotes }) {
  const { updateNoteTitle, updateNoteContent } = useContext(NotesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Toggle edit mode and update the note title if saving
  const handleUpdateClick = () => {
    if (isEditing) {
      updateNoteTitle(id, editedTitle);
    }
    setIsEditing(!isEditing);
  };
    // Handle changes to the title input field
  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // Open the modal to edit content
  const openModal = () => {
    setIsModalOpen(true);
  };
  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Handle saving new content from the modal
  const handleSaveContent = (newContent) => {
    updateNoteContent(id, newContent);
    closeModal();
  };

  return (
    <li>
      {isEditing ? (
        <input
        className="editTitle"
          type="text"
          value={editedTitle}
          onChange={handleInputChange}
          autoFocus={true} onBlur={({ target }) => target.focus()}
        />
      ) : (
        <p onClick={openModal}>{title}</p>
      )}
      <button onClick={() => deleteNotes(id)} className="btn btn-danger">
        Delete
      </button>
      <button onClick={handleUpdateClick} className="btn btn-update">
        {isEditing ? "Save" : "Update"}
      </button>
      <button onClick={openModal} className="btn btn-edit-content">
        Edit Content
      </button>
      {/* modal component for editing content*/}
      <EditModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        initialContent={content}
        onSave={handleSaveContent}
      />
    </li>
  );
}
