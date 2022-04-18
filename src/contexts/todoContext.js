import { createContext, useContext, useState } from "react";
import React from 'react';

const TodosContext = createContext();

const TodosContextProvider = ({children}) => {

const [todos, setTodos] =useState([]);
const addHandler=(text) =>{
  setTodos(prev => [...prev, {
    id: Date.now(),
    text,
    completed: false
  }])
}

const changeStatusHandler=(id)=>{
  setTodos(prev=>prev.map(todo=>{
    if(todo.id===id) {
      return {
        ...todo,
        completed: !todo.completed
      }
    }
    return todo;
  }))
}

const deleteHandler=(id)=>{
   setTodos(prev=>prev.filter(todo=> todo.id !== id))
}

  return (
   <TodosContext.Provider value={{todos, setTodos,addHandler,changeStatusHandler,deleteHandler}}>
     {children}
   </TodosContext.Provider>
  )
}
export default TodosContextProvider;

export const useTodosContext = () => useContext(TodosContext)
