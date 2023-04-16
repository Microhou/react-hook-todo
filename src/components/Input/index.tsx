import React, { useRef } from 'react'

import { ITodo } from '../type'


interface IProps {
    addTodo: (todo: ITodo) => void;
    todoList: ITodo[]
}

function Input({addTodo, todoList}: IProps):JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null)
    const addItem = (): void => {
        const val: string = inputRef.current!.value.trim();
        if(val.length){
            const  isExist = todoList.find(todo => todo.content === val);

            if(isExist){
                alert("已存在该项")
                return;
            }

            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            })

            inputRef.current!.value = ""
        }
    }
  return (
    <div className='todo-input'>
      <input type='text' ref={inputRef} placeholder='请输入代办项目'></input>
      <button onClick={addItem}>增加</button>
    </div>
  )
}
/**
 * id: number new Date().getTime()
 * content: string
 * completed: boolean
 */

export default Input
