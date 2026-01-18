import { useState } from "react";

function App() {
  // State for the input box
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <h1>My Todo List ✅</h1>

      <form>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default App;