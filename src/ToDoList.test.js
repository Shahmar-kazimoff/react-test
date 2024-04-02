import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../src/ToDoList';

test('renders TodoList component', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);

  expect(getByText('Todo')).toBeInTheDocument();
  expect(getByPlaceholderText('Elave et')).toBeInTheDocument();
  expect(getByText('Add')).toBeInTheDocument();
});

test('adds todo when Add button is clicked', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);

  const input = getByPlaceholderText('Elave et');
  const addButton = getByText('Add');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  expect(getByText('Test Todo')).toBeInTheDocument();
});
