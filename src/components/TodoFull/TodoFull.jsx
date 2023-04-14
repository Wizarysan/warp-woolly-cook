import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchData } from "../../api";
import { TODOS_ENDPOINT, USER_ENDPOINT } from "../../api/constants";

const TodoFull = () => {
  let params = useParams()
  const [todo, setTodo] = useState({})
  const [user, setUser] = useState({})

  useEffect(()=>{
    fetchData(setTodo, TODOS_ENDPOINT, params.id).then(
      result => fetchData(setUser, USER_ENDPOINT, result.userId).catch(console.error)
    ).catch(console.error);        
  }, [])

  return (
    <div>
      <p><b>Item number:</b> {params.id}</p>
      <p><b>Creator:</b> {user.name}</p>
      <p><b>Title:</b> {todo.title}</p>      
    </div>
  )
}  

export default TodoFull