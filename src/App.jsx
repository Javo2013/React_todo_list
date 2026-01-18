import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

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

  return (
    <div>
      <h1>My Todo List ✅</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;