import React, { useCallback, useEffect, useState, useReducer } from 'react'
import Input from '../Input';
import List from "../List";
import {ITodo, IState, ACTION_TYPE} from '../type'
import { todoReducer } from '../reducer';


const init = (initTodoList: ITodo[]): IState => {
    return {
        todoList: initTodoList
    }
}

function TodoList():JSX.Element {
    // const [todoList, setTodoList] = useState<ITodo[]>([]);
    
    const [state, dispatch] = useReducer(todoReducer, [], init); 
    useEffect(() => {
        // console.log(state.todoList);
       const todoList = JSON.parse(localStorage.getItem("todolist") || '[]') 
       
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
        // return () => {
        //     localStorage.setItem("todolist", JSON.stringify(state.todoList));
        // }
    }, [])
    useEffect(() => {
       localStorage.setItem("todolist", JSON.stringify(state.todoList));
    }, [state.todoList])
    const addTodo = useCallback((todo: ITodo) => {
        // setTodoList((todoList) => [...todoList, todo])
        dispatch({type: ACTION_TYPE.ADD_TODO, payload: todo})
    }, [])

    const removeTodo = useCallback((id: number) => {
        dispatch({type: ACTION_TYPE.REMOVE_TODO, payload: id})
    }, [])

    const toggleTodo = useCallback((id: number) => {
        dispatch({type: ACTION_TYPE.TOGGLE_TODO, payload: id})
    }, [])

    return (
    <div>
       <Input addTodo={addTodo} todoList={state.todoList}></Input>
       <List todoList ={state.todoList }toggleTodo={toggleTodo} removeTodo={removeTodo} ></List>
    </div>
  )
}

export default TodoList
