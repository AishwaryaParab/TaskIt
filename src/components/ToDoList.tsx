import React from 'react'
import { ToDo } from "../model";
import ToDoItem from './ToDoItem';

interface Props {
    todos: ToDo[],
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const ToDoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map(todo => {
            return <ToDoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        })}

    </div>
  )
}

export default ToDoList