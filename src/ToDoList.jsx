import React, { useState } from 'react';
import "./App.css"
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className='container'>
      <h1>Todo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Elave et"
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li className='liler' key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
