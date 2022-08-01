import React, {useState} from "react";

export function useChangeInput() {
    const [str,setStr] = useState<any>('')
    const [isBlur,setBlur] = useState<boolean>(false)
    function ChangeState(st:React.ChangeEvent<HTMLInputElement>){
        setStr(st.target.value)
    }
    function OnBlur(type:boolean){
        setBlur(type)
    }
    return {str,ChangeState,isBlur,OnBlur,setStr}
}