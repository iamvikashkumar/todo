import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        // when we hit submit pages get reload,
        // to handle that we use the below method preventDefault to handle default action.
        e.preventDefault();

        editTodo(value);
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' 
            placeholder='Update Task' 
            value={value}
            className='todo-input'
            onChange={(e) => setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'> Update Task </button>
    </form>
  )
}
