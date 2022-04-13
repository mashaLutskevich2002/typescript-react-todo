import React from "react";
import {TodoElement} from "./Elements/TodoElement";
import {ITodo} from "../todoObject";

interface TodoListProps{
    todos: ITodo[]
    checkedTodo(id:number):void
    removeTodo(id:number):void
    setIsShow(isShow:boolean):void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <div>
            {props.todos.map((item)=>{
                return (
                    <ul className='todo'>
                        <TodoElement setIsShow={props.setIsShow} completed={item.completed} title={item.title} id={item.id} checkedTodo={props.checkedTodo} removeTodo={props.removeTodo}/>
                    </ul>
                )
            })}
        </div>
    )

}
