import React, { useState, useEffect } from "react";
import {
  Routes, Route
} from "react-router-dom";
import Todos from './components/Todos'
import TodoFull from "./components/Todo/Todo";

// Home function that is reflected across the site
export default function App() {
  
  return (
    <>
      <main role="main" className="wrapper">
        <TodoFull />
      </main>

      {/* Footer links to Home and About */}
      <footer className="footer">
        <a
          className="btn--remix"
          target="_top"
          href="https://glitch.com/edit/#!/remix/glitch-hello-react"
        >
          <img src="https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140" alt="" />
          Remix on Glitch
        </a>
      </footer>
    </>
  );
}
