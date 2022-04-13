import React from "react";
import { PopupDelete } from "../PopupDelete";

type TodoElementProps = {
    id: number
    title: string
    completed: boolean,
    checkedTodo(id:number):void
    removeTodo(id:number):void
    setIsShow(isShow:boolean):void
    isShow:boolean
}


export const TodoElement: React.FC<TodoElementProps> = (props) => {

    const removeHandler = (e:React.MouseEvent) =>{
        e.preventDefault()
        props.setIsShow(true)
    }

    return(
        <>
            <li className={props.completed ? 'todo completed' : 'todo'} key={props.id}>
                <label className='todo'>
                <input type='checkbox' checked={props.completed}  onChange={()=>props.checkedTodo(props.id)} />
                <span>{props.title}</span>
                <i className='material-icons red-text' onClick={removeHandler}> delete </i>
                </label>
            </li>

            <PopupDelete removeTodo={props.removeTodo} id={props.id} isShow={props.isShow} setIsShow={props.setIsShow} />
        </>
           
    )
}
