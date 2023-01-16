import React, { useState } from 'react'

function Addtodo() {
const [todo, setTodo] = useState([])
const [newTodo, setNewTodo] = useState()

const addTodo = (event) => {
    event.prevenDefault()
    setTodo([...todo,newTodo])
    setNewTodo("")
}

const handleChange = (event) => {
    setNewTodo(event.target.value)
}

  return (
    <div className='container text-center text-white'>
        <h1>TODO ADD</h1>
        <form onSubmit={addTodo}>
            <input onChange={handleChange} value={newTodo} ></input>
            <button className='btn btn-warning'>Click Me</button>
        </form>
    <ul>
        {todo.map((todos) => (
            <li key={todos}>{todos}</li>
        ))}
    </ul>
    </div>
  )
}

export default Addtodo