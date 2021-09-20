import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items); // this key todos = todosSlice>name:'todos'
  const activeFilter = useSelector((state) => state.todos.activeFilter);

  let filtered = [];

  const handleDestroy = (id, title) => {
    if (window.confirm(`Are you sure delete ${title} ?`)) {
      dispatch(destroy(id));
    }
  };

  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false && todo
        : todo.completed === true && todo
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => {
                dispatch(toggle({ id: item.id }));
              }}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id, item.title)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
