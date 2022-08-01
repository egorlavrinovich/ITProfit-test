import React, {useState} from "react";

export function useChangeInput() {
    const [str,setstr] = useState<any>('')
    const [isBlur,setblur] = useState<boolean>(false)
    function ChangeState(st:React.ChangeEvent<HTMLInputElement>){
        setstr(st.target.value)
    }
    function OnBlur(type:boolean){
        setblur(type)
    }
    return {str,ChangeState,isBlur,OnBlur,setstr}
}