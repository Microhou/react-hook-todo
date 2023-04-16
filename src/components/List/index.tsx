import React from 'react'
import { ITodo } from '../type'
import Item from './Item';

interface IProps {
    todoList: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
function List({todoList, removeTodo, toggleTodo}: IProps):JSX.Element {

  return (
    <div className='td-list'>
      {
        todoList && todoList.map((todo: ITodo) => {
            return (<Item key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} todo={todo}></Item>)
        })
      }
    </div>
  )
}

export default List
