import React, { useState } from "react";
import InitializeUser from "../components/InitializeUser.jsx";
import TodoLoader from "../components/TodoLoader.jsx";
import TodoAdder from "../components/TodoAdder.jsx";
import TodoDelete from "../components/TodoDelete.jsx";
import ClearAllTodos from "../components/ClearAllTodos.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="container mt-5">
      <InitializeUser />
      <TodoLoader setTodos={setTodos} setLoading={setLoading} />
      
      <div className="card">
        <div className="card-body">
          <h1 className="text-center mb-4">Lista de Tareas</h1>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <ClearAllTodos todos={todos} setTodos={setTodos} />
                <TodoAdder setTodos={setTodos} />
              </div>
              
              {todos.length === 0 ? (
                <p className="text-center text-muted">No hay tareas, ¡añade tu primera tarea!</p>
              ) : (
                <ul className="list-group">
                  {todos.map(todo => (
                    <TodoDelete 
                      key={todo.id} 
                      todo={todo} 
                      setTodos={setTodos} 
                    />
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;