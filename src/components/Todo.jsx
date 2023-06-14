import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Todo = ({todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div className="todo-border"></div>
      <div className="todo-content" style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        backgroundColor: todo.isCompleted ? "rgba(89,73,107,1)" : "#252525"}}>
        <div className="content">
          <p>{todo.text}</p>
          <span className="categoy">({todo.category})</span>
        </div>
        <div>
          <button className='complete' onClick={() => completeTodo(todo.id)}><FontAwesomeIcon icon={faCheck} /></button>
          <button className='remove' onClick={()=> removeTodo(todo.id)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
      </div>
    </div>
  )
}

export default Todo