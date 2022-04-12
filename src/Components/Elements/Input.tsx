import React, {useState} from "react";

interface TodoInputProps{
    handlerTodoValue(title:string): void
}

export const Input: React.FC<TodoInputProps> = (props) =>{
    const [title, setTitle] = useState<string>('');

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }

    const pressEnter = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            props.handlerTodoValue(title)
            setTitle('')
        }
    }

    return(
        <div className='w-40 m-0' >
            <input id="todo" type="text" value={title} className="validate w-40" onChange={handlerChange} onKeyPress={pressEnter}/>
            <label className="active" htmlFor="todo">Add todo</label>
        </div>
    )
}
