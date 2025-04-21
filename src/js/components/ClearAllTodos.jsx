import React from "react";

const ClearAllTodos = ({ todos, setTodos }) => {
  const handleClearAll = async () => {
    if (!window.confirm("¿Borrar TODAS las tareas? ¡No se puede deshacer!")) return;

    try {
      await Promise.all(
        todos.map((todo) =>
          fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, {
            method: "DELETE",
          })
        )
      );
      
      setTodos([]);
    } catch (error) {
      console.error("Error al borrar tareas:", error);
    }
  };

  return (
    <button
      onClick={handleClearAll}
      className="btn btn-danger mb-3"
      disabled={todos.length === 0}
    >
      🗑️ Borrar Todas
    </button>
  );
};

export default ClearAllTodos;