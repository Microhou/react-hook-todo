import React from 'react'
import { ITodo } from '../type'

interface IProps {
    todo: ITodo;
    toggleTodo: (id: number)  => void;
    removeTodo: (id: number) => void;
}
function Item({ todo, toggleTodo, removeTodo }: IProps):JSX.Element {
    const { id, content, completed } = todo;
  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}></input>
      <span style={{textDecoration: completed? "line-through": "none"}}>{content}</span>
      <button onClick={() => { removeTodo(id)}}>删除</button>
    </div>
  );
}

export default Item
