import React from "react";
import { Button } from "./Elements/Button";

interface PopupDeleteProps{
    id:number
    isShow:boolean
    setIsShow: (isShow:boolean) => void 
    removeTodo(id:number):void
}

export const PopupDelete: React.FC<PopupDeleteProps> = (props) => {

    return(
        <div className={props.isShow ? "popup active" : 'popup'} onClick={()=>props.setIsShow(false)}>
            <div className="body-popup" onClick={(e)=>e.stopPropagation()}>
                <p>Are you sure you want to delete the note?</p>
                <Button onClick={()=>props.removeTodo(props.id)} name='Yes' />
                <Button onClick = {() =>props.setIsShow(false)} name='No' />
            </div>
        </div>

    )
}