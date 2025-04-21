import React, { useState } from 'react';

const TodoAdder = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      const response = await fetch("https://playground.4geeks.com/todo/todos/Erika", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ label: input, is_done: false })
      });
      
      const newTodo = await response.json();
      setTodos(prev => [...prev, newTodo]);
      setInput("");
    } catch (error) {
      console.error("Error agregando tarea:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column w-100 m-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva tarea"
        />
      </div>
    </form>
  );
};

export default TodoAdder;