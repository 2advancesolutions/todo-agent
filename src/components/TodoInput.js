import React, { useState } from 'react';
import './TodoInput.css';

function TodoInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input__field"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="New todo"
      />
      <button
        type="submit"
        className="todo-input__btn"
        disabled={!value.trim()}
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
