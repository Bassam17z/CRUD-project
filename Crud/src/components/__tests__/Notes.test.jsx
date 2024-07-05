import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Notes from '../Notes';
import NotesContext from '../NotesContext';

test('renders Notes and handles empty state', () => {
  const { getByText } = render(
    <NotesContext.Provider value={{ notes: [] }}>
      <Notes />
    </NotesContext.Provider>
  );

  expect(getByText('no current notes')).toBeInTheDocument();
});

test('renders Notes list', () => {
  const notes = [{ id: 1, title: 'Note 1', content: 'Content 1' }];
  const { getByText } = render(
    <NotesContext.Provider value={{ notes }}>
      <Notes />
    </NotesContext.Provider>
  );

  expect(getByText('Note 1')).toBeInTheDocument();
});
