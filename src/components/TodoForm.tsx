import React, { FC, ReactElement, useState, ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
  addTodo: (text: string, category: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }): ReactElement => {
  const [value, setValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  }

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className="todo-form">
      <h2>Create task:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title..."
          value={value}
          onChange={handleValueChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button type="submit">Create task!</button>
      </form>
    </div>
  );
}

export default TodoForm;
