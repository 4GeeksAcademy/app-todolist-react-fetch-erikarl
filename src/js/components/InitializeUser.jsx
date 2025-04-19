import { useEffect } from "react";

export default function InitializeUser() {
  useEffect(() => {
    fetch("https://playground.4geeks.com/todo/users/Erika", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => {}); 
  }, []);

  return null; 
}