import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
// Component for the modal to edit note content

export default function EditModal({
  isOpen,
  onRequestClose,
  initialContent,
  onSave,
}) {
  const [content, setContent] = useState(initialContent);

  // Handle saving the new content and close the modal
  const handleSave = () => {
    onSave(content);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Note"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Edit Note Content</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="10"
        cols="50"
      />
      <div className="buttons">
        <button onClick={handleSave} className="btn btn-save">
          Save
        </button>
        <button onClick={onRequestClose} className="btn btn-close">
          Close
        </button>
      </div>
    </Modal>
  );
}
