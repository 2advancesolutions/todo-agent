import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-item__text">{todo.text}</span>
      <button
        className="todo-item__delete"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
