import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NotesProvider } from '../NotesContext';
import Notes from '../Notes';
import NoteForm from '../NoteForm';

test('NotesProvider provides context values', () => {
  const { getByLabelText, getByText } = render(
    <NotesProvider>
      <NoteForm />
      <Notes />
    </NotesProvider>
  );

  const input = getByLabelText(/Add new Note/i);
  const button = getByText('Add');

  fireEvent.change(input, { target: { value: 'New Note' } });
  fireEvent.click(button);

  expect(getByText('New Note')).toBeInTheDocument();
});
