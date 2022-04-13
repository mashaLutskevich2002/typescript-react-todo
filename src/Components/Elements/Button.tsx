import React from "react";

interface ButtonProps{
    onClick():void
    name:string
}

export const Button: React.FC<ButtonProps> = (props) =>{
    return(
        <input type='submit' onClick={props.onClick} className='button' value={props.name}/>
    )
}