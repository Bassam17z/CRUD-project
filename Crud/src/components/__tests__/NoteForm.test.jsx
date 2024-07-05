import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoteForm from '../NoteForm';
import NotesContext from '../NotesContext';

test('renders NoteForm and handles input and submit', () => {
  const addNote = jest.fn();
  const { getByLabelText, getByText } = render(
    <NotesContext.Provider value={{ AddNote: addNote }}>
      <NoteForm />
    </NotesContext.Provider>
  );

  const input = getByLabelText(/Add new Note/i);
  const button = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Note' } });
  fireEvent.click(button);

  expect(addNote).toHaveBeenCalledWith('New Note');
});
