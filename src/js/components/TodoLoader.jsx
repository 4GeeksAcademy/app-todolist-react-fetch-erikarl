import {useEffect} from "react";

export default function TodoLoader({ setTodos, setLoading }) {
  useEffect(() => {
    setLoading(true);
    fetch("https://playground.4geeks.com/todo/users/Erika")
      .then(res => res.json())
      .then(data => {
        setTodos(data.todos || []);
        setLoading(false);
      })
      .catch(() => {
        setTodos([]);
        setLoading(false);
      });
  }, [setTodos, setLoading]);

  return null;
}