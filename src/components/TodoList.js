import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { destroy, toggle } from "../redux/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items); // this key todos = todosSlice>name:'todos'

	const handleDestroy = (id, title) =>{
		if(window.confirm(`Are you sure delete ${title} ?`)){
			dispatch(destroy(id))
		}
	}

  return (
    <ul className="todo-list">
      {items.map((item) => (
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
            <button className="destroy" onClick={() =>handleDestroy(item.id, item.title)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
