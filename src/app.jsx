import React, { useState, useEffect } from "react";
import Todo from './Todo'

// Home function that is reflected across the site
export default function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      console.log(json)
      setTodos(json);
    }

    fetchData().catch(console.error);    
  }, [])
  
  const searchTodo = (query) => {
    setSearch(query)
            if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
  }
  
  return (
    <>
      <main role="main" className="wrapper">
        
        <input 
            type="text" 
            name="name"
            placeholder="Search Todos"
            value={search}
            onChange={e => searchTodo(e.target.value)}
          />
        <div>
         {todos.map(todo=> <Todo number={todo.id} key={todo.id}/>)
        }
        </div>
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
