import { useTodosContext } from "../../contexts/todoContext";
import TodoItem from "../TodoItem/TodoItem";

function ToDoList() {
const {todos} = useTodosContext()

  return (
   <ul className="list-group">
     {
       todos.length ?
       todos.map((todo, ind)=> <TodoItem key={todo.id} ind={ind} todo={todo}/>) 
       : <p>Nothing  to do</p>
     }
   </ul>
  )
}

export default ToDoList;
