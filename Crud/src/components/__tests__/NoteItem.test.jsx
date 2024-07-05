import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoteItem from '../NoteItem';
import NotesContext from '../NotesContext';

test('renders NoteItem and handles actions', () => {
  const deleteNote = jest.fn();
  const updateNoteTitle = jest.fn();
  const updateNoteContent = jest.fn();
  const note = { id: 1, title: 'Note 1', content: 'Content 1' };

  const { getByText, getByDisplayValue, getByRole } = render(
    <NotesContext.Provider value={{ deleteNotes: deleteNote, updateNoteTitle, updateNoteContent }}>
      <NoteItem {...note} />
    </NotesContext.Provider>
  );

  fireEvent.click(getByText('Delete'));
  expect(deleteNote).toHaveBeenCalledWith(1);

  fireEvent.click(getByText('Update'));
  fireEvent.change(getByDisplayValue('Note 1'), { target: { value: 'Updated Note 1' } });
  fireEvent.click(getByText('Save'));
  expect(updateNoteTitle).toHaveBeenCalledWith(1, 'Updated Note 1');

  fireEvent.click(getByText('Edit Content'));
  fireEvent.change(getByRole('textbox'), { target: { value: 'Updated Content 1' } });
  fireEvent.click(getByText('Save'));
  expect(updateNoteContent).toHaveBeenCalledWith(1, 'Updated Content 1');
});
