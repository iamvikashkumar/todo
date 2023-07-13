import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        // when we hit submit pages get reload,
        // to handle that we use the below method preventDefault to handle default action.
        e.preventDefault();

        addTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
            placeholder='What is the Task Today?' 
            value={value}
            className='todo-input'
            onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'> Add Task </button>
    </form>
  )
}
