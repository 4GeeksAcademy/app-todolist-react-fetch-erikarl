import React from 'react';

const TodoDelete = ({ todo, setTodos }) => {
  const handleDelete = async () => {
    try {
      await fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
      });
      setTodos(prev => prev.filter(item => item.id !== todo.id));
    } catch (error) {
      console.error("Error eliminando tarea:", error);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.label}
      <button 
        onClick={handleDelete}
        className="btn btn-danger btn-sm"
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoDelete;