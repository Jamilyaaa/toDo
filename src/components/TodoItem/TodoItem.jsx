import { useState } from "react";
import { useTodosContext } from "../../contexts/todoContext";

function TodoItem({todo, ind,id}) {

const {changeStatusHandler, deleteHandler, setTodos} = useTodosContext() 

const [changer, setChanger] = useState(false);
const [newText, setNewText] = useState('');

const changeText = () => {
 setTodos((prev) => prev.map((el) => el.id === id ? {...el, text: newText} : el));
 setChanger(false)
}

  
  return (
     <li className="list-group-item d-flex align-items-center justify-content-between">
     <span className={todo.completed ? 'done': ''}>
       {ind+1}.{todo.text}
      </span>
      {
      changer ? (<>
      <input style={{width: '300px'}} placeholder="enter text" onChange={(e)=>{setNewText(e.target.value)}} value={newText} type="text"/>
      <button type="button" onClick={changeText} className="btn btn-warning">Submit</button>
      </>) : ''
    }
     <span>
     <button type="button" onClick={()=>changeStatusHandler(todo.id)} className="btn btn-success mx-1">{todo.completed? 'Undone': 'Done'}</button>
     <button type="button" onClick={()=>deleteHandler(todo.id)} className="btn btn-danger mx-1">Delete</button>
     <button type="button" onClick={()=>setChanger(prev => !prev)} class="btn btn-warning">
    Edit</button>
      </span>
     </li>
  )
}

export default TodoItem;
