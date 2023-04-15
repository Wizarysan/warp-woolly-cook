import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { fetchData } from "../../api";
import { TODOS_ENDPOINT } from "../../api/constants";

import Todo from './../Todo'

const StyledTodos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
`

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState(null)
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)
  
  useEffect(()=>{
    fetchData(setTodos, setError, TODOS_ENDPOINT).catch(console.error);    
  }, [])
  
  const searchTodo = (query) => {
    setSearch(query)
    setFilteredTodos(search !== '' ? 
      todos.filter((todo) => todo.title.includes(query)) :
      todos
    )
  }

  if(error) return (<p>There was some error: {error.message}</p>)

  return(<>
        <span>Search by title includes: </span>
        <input 
            type="text" 
            name="name"
            placeholder="Search Todos"
            value={search}
            onChange={e => searchTodo(e.target.value)}
          />        
        <StyledTodos>
         {(filteredTodos ? filteredTodos : todos)
            .map(todo=> <Todo number={todo.id} title={todo.title} completed={todo.completed} key={todo.id} />)}         
        </StyledTodos>
  </>)

}

export default Todos