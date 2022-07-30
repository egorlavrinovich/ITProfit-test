import React, {useState} from "react";

export function UseChangeInput() {
    const [str,setstr] = useState<any>('')
    const [blur,setblur] = useState<boolean>(false)
    function ChangeState(st:React.ChangeEvent<HTMLInputElement>){
        setstr(st.target.value)
    }
    function OnBlur(type:boolean){
        setblur(type)
    }
    return {str,ChangeState,blur,OnBlur}
}