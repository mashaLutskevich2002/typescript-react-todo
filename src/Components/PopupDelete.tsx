import React, { useState } from "react";
import { ITodo } from "../todoObject";
import { Button } from "./Elements/Button";
import { TodoList } from "./TodoList";

interface PopupDeleteProps{
    isShow:boolean
    setIsShow: (isShow:boolean) => void 
    setIsPressYes(isPressYes:boolean):void
}

export const PopupDelete: React.FC<PopupDeleteProps> = (props) => {
    return(
        <div className={props.isShow ? "popup active" : 'popup'} onClick={()=>props.setIsShow(false)}>
            <div className="body-popup" onClick={(e)=>e.stopPropagation()}>
                <p>Are you sure you want to delete the note?</p>
                <Button onClick={() => props.setIsPressYes(true)} name='Yes' />
                <Button onClick = {() =>props.setIsShow(false)} name='No' />
            </div>
        </div>

    )
}