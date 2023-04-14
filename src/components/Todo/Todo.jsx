import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 250px;
    padding: 30px;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 20px;    
    background: ${props=>props.completed ? "green" : "crimson"}
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Todo = ({number, title, userId, completed}) => 
  <StyledLink to={`todos/${number}`}>
    <StyledDiv completed={completed}>      
        #{number}<br/>
        {title.substring(0, 20)}
        {title.length > 19 ? '...' : ''}      
    </StyledDiv>  
  </StyledLink>

export default Todo