import { useTodosContext } from "../../contexts/todoContext";

function TodoItem({todo, ind}) {

const {changeStatusHandler, deleteHandler} = useTodosContext() 

  return (
     <li className="list-group-item d-flex align-items-center justify-content-between">
     <span className={todo.completed ? 'done': ''}>
       {ind+1}.{todo.text}
     </span>
     <span>
     <button type="button" onClick={()=>changeStatusHandler(todo.id)} className="btn btn-success mx-1">{todo.completed? 'Undone': 'Done'}</button>
     <button type="button" onClick={()=>deleteHandler(todo.id)} className="btn btn-danger mx-1">Delete</button>
     </span>
     </li>
  )
}

export default TodoItem;
