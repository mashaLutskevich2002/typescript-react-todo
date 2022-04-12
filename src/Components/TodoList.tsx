import React from "react";
import {TodoElement} from "./Elements/TodoElement";
import {ITodo} from "../todoObject";
// import {TodoElement} from "./Elements/TodoElement";

type TodoListProps ={
    todos: ITodo[]
    checkedTodo(id:number):void
    removeTodo(id:number):void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    return(
        <div>

            {props.todos.map((item)=>{
                return (
                    <ul className='todo'>
                        <TodoElement completed={item.completed} title={item.title} id={item.id} checkedTodo={props.checkedTodo} removeTodo={props.removeTodo}/>
                    </ul>
                )
            })}
        </div>
    )

}
