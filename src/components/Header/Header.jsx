import {useState} from 'react';
import { useTodosContext } from '../../contexts/todoContext';

function Header() {
  const {addHandler}=useTodosContext()
  
  const [input, setInput]=useState('');

  const inputHandler=(e)=>{
    setInput(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    if(input.trim()) {
      addHandler(input.trim())
      setInput('')
  }
  }
  return (
<header>
<form onSubmit={submitHandler} className='d-flex align-items-center justify-content-center'>
  <div> 
    <input placeholder='Text here...' onChange={inputHandler} value={input} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn btn-primary mx-1">Submit</button>
</form>
</header>
  )
}

export default Header;
