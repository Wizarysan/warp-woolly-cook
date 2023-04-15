import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todos from './components/Todos'
import TodoFull from "./components/TodoFull";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
  },
  {
    path: "todos/:id",
    element: <TodoFull />,
  },
]);

export default function App() {  
  return (
    <div style={{padding: '10px'}}>
      <main role="main" className="wrapper">
        <RouterProvider router={router} />
      </main>

      {/* We can put some navigation links and footer data here */}
      <footer className="footer">
        <a target="_top" href="/">Home</a>
      </footer>
    </div>
  );
}
