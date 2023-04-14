import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./app.jsx";
import Todos from './components/Todos'
import TodoFull from "./components/Todo/Todo";
import { HelmetProvider } from 'react-helmet-async';

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

/*
Root of react site 
- Imports Helment provider for the page head
- And App which defines the content and navigation
*/

// Render the site https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept();
}
