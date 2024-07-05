import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditModal from '../EditModal';

test('renders EditModal and handles actions', () => {
  const onSave = jest.fn();
  const onRequestClose = jest.fn();

  const { getByText, getByDisplayValue } = render(
    <EditModal
      isOpen={true}
      onRequestClose={onRequestClose}
      initialContent="Initial Content"
      onSave={onSave}
    />
  );

  fireEvent.change(getByDisplayValue('Initial Content'), { target: { value: 'Updated Content' } });
  fireEvent.click(getByText('Save'));
  expect(onSave).toHaveBeenCalledWith('Updated Content');

  fireEvent.click(getByText('Close'));
  expect(onRequestClose).toHaveBeenCalled();
});
