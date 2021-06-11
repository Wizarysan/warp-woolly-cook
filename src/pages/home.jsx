import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import { Link } from "wouter";


export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, []);
  return (
    <>
      <h1> TODO list </h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {
        todos.map((todo) => (
          <div style={{
            border: 'solid 1px',
            padding: 20,
            flex: '250px 0 0',
            margin: 10,
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'middle',
            alignItems: 'center',
            backgroundColor: todo.completed ? 'green' : 'crimson',
          }}>
            <div>#{todo.id}</div>
            <div><p>{todo.title.replace(/^(.{20}).{2,}/, "$1…")}</p></div>
          </div>
        ))
      }
      </div>
    </>
  );
}
