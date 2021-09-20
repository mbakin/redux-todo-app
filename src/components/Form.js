import { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from "../redux/todos/todosSlice";

const Form = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if(!title) return;

    e.preventDefault();

    dispatch(addTodo({ id: nanoid(), title, completed: false}))
    setTitle('')
  };

  const handleTitleChange = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default Form;
