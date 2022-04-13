import React from "react";
import {Input} from "./Elements/Input";
import {TodoList} from "./TodoList";
import {ITodo} from "../todoObject";

interface TodoMainProps{
    handlerTodoValue(title:string): void,
    checkedTodo(id:number):void
    removeTodo(id:number):void
    todos: ITodo[]
    setIsShow(isShow:boolean):void
    isShow:boolean
}

export const TodoMain: React.FC<TodoMainProps> = (props) =>{
   return(
         <>
            <Input handlerTodoValue={props.handlerTodoValue}/>
             <div className='container'>
                 <TodoList isShow={props.isShow} setIsShow={props.setIsShow} todos={props.todos} checkedTodo={props.checkedTodo} removeTodo={props.removeTodo}/>
             </div>
         </>
   )
}
