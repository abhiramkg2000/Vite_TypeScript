import React, { ChangeEvent } from "react";

import "./TodoCard.css";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  todoStatus,
} from "../../../store/features/todosSlice/todosSlice";

type TodoCardProps = {
  todo: { id: number; name: string; complete: boolean };
};

function TodoCard({ todo }: TodoCardProps) {
  const click = todo.complete;
  const dispatch = useDispatch();

  const handleTodoComplete = () => {
    // setClick((prevClick) => !prevClick);
    dispatch(todoStatus([todo.id, !click]));
  };

  const handleTodoDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(editTodo([todo.id, e.target.value]));
  };

  return (
    <div data-testid="todoCard" className="todo-card">
      {/* <div className="date-container">{todo.date}</div> */}
      <input
        data-testid="editTodo"
        className={"todo-list" + (click ? " strike-through" : "")}
        value={todo.name}
        onChange={handleTodoChange}
      />
      <div className="icon-container">
        <i
          data-testid="todoComplete"
          className={
            click ? "fa-solid fa-circle-check" : "fa-regular fa-circle"
          }
          onClick={handleTodoComplete}
        ></i>
        <i
          data-testid="todoDelete"
          className="fa-regular fa-trash-can"
          onClick={handleTodoDelete}
        ></i>
      </div>
    </div>
  );
}

export default TodoCard;
