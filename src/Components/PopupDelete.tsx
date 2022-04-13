import React from "react";
import { Button } from "./Elements/Button";

interface PopupDeleteProps{
    // id:number
    isShow:boolean
    setIsShow: (isShow:boolean) => void 
    // removeTodo(id:number):void
    // action():void
}

export const PopupDelete: React.FC<PopupDeleteProps> = (props) => {

    return(
        <div className={props.isShow ? "popup active" : 'popup'} onClick={()=>props.setIsShow(false)}>
            <div className="body-popup" onClick={(e)=>e.stopPropagation()}>
                <p>You delete the note</p>
                <Button onClick = {() =>props.setIsShow(false)} name='Ok' />
            </div>
        </div>

    )
}