import { useState } from "react";

function App() {
  // Holds all todos (array of objects)
  const [todos, setTodos] = useState([]);

  // Holds input field value
  const [newTodo, setNewTodo] = useState("");

  // Updates input as user types
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // Adds a new todo when form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();

    if (newTodo.trim() === "") return;

    const todoObject = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };

    setTodos([...todos, todoObject]);
    setNewTodo("");
  };

  // Toggles complete/incomplete
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Deletes a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Optional count for remaining todos
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1 className="title">My Todo List ✅</h1>

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button className="add-btn" type="submit">
          Add Todo
        </button>
      </form>

      <p className="count">
        Remaining Todos: <span>{remainingTodos}</span>
      </p>

      {todos.length === 0 ? (
        <p className="empty-msg">No todos yet 👀 Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;