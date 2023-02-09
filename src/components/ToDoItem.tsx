import React, { useState, useRef, useEffect } from "react";
import { ToDo } from "../model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import "./ToDoList.css";

interface Props {
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoItem = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const handleEdit = (todo: ToDo) => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => {
        return todo.id == id ? { ...todo, todo: editToDo } : todo;
      })
    );
    setEdit(!edit);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      <div
        style={
          edit ? { backgroundColor: "#E8EEFE" } : { backgroundColor: "#91B3FA" }
        }
        className="todo-item"
      >
        {edit ? (
          <input
            ref={inputRef}
            className="edit-input"
            value={editToDo}
            onChange={(e) => setEditToDo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <p>{todo.todo}</p>
        )}

        {/* {todo.isDone ? <s>{todo.todo}</s> : <p>{todo.todo}</p>} */}
        {/* <s></s> strikes the content */}

        <div className="list-icons">
          <EditIcon className="icon" onClick={() => handleEdit(todo)} />
          <DeleteIcon className="icon" onClick={() => handleDelete(todo.id)} />
          <DoneIcon className="icon" onClick={() => handleDone(todo.id)} />
        </div>
      </div>
    </form>
  );
};

export default ToDoItem;
