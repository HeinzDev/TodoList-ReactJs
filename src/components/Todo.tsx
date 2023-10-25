import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    category: string;
    isCompleted: boolean;
  };
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

const Todo: FC<TodoProps> = ({ todo, removeTodo, completeTodo }): ReactElement => {
  const handleCompleteClick = () => {
    completeTodo(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  const icon: IconDefinition = todo.isCompleted ? faCheck : faTimes;

  return (
    <div className="todo">
      <div className="todo-border"></div>
      <div
        className="todo-content"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "",
          backgroundColor: todo.isCompleted ? "rgb(52,100,140)" : "#252525",
        }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <span className="category">({todo.category})</span>
        </div>
        <div>
          <button className='complete' onClick={handleCompleteClick}>
            <FontAwesomeIcon icon={icon} />
          </button>
          <button className='remove' onClick={handleRemoveClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
