import React, {useState} from "react";

export function useChangeInput() {
    const [str,setStr] = useState<any>('')
    const [isBlur,setBlur] = useState<boolean>(false)
    function changeState(st:React.ChangeEvent<HTMLInputElement>){
        setStr(st.target.value)
    }
    function onBlur(type:boolean){
        setBlur(type)
    }
    return {str,changeState,isBlur,onBlur,setStr}
}