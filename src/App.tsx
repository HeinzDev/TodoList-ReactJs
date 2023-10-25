import React, { ReactElement, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

interface TodoItem {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

function App(): ReactElement {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      text: "Create Todo list in ReactJS",
      category: "Study",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Personal Task",
      category: "Personal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Asc");

  const addTodo = (text: string, category: string) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodos);
  }

  const removeTodo = (id: number) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const completeTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos.forEach(todo => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>To do list</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter(todo => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text))
          .map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))
        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
