import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' },
  ]);

  const addTodo = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">📝 Todo List</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
        {todos.length === 0 && (
          <p className="empty">No todos yet — add one above!</p>
        )}
      </div>
    </div>
  );
}

export default App;
