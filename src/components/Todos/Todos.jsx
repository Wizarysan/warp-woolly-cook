import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import { TODOS_ENDPOINT } from "../../api/constants";

import Todo from './../Todo'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState(null)
  const [search, setSearch] = useState("")
  
  useEffect(()=>{
    fetchData(setTodos, TODOS_ENDPOINT).catch(console.error);    
  }, [])
  
  const searchTodo = (query) => {
    setSearch(query)
    setFilteredTodos(search !== '' ? 
      todos.filter((todo) => todo.title.includes(query)) :
      todos
    )
  }

  return(<>
        <input 
            type="text" 
            name="name"
            placeholder="Search Todos"
            value={search}
            onChange={e => searchTodo(e.target.value)}
          />
        <div>
         {(filteredTodos ? filteredTodos : todos)
            .map(todo=> <Todo number={todo.id} title={todo.title} key={todo.id} />)}         
        </div>
  </>)

}

export default Todos