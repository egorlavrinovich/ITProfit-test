import React, {FC, FocusEventHandler} from 'react';

interface IInput{
    type:string;
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:React.EventHandler<any>;
    className?:string;
}

const Input:FC<IInput> = ({onBlur,type,name,placeholder,value,onChange,className}) => {
    return (
        <input className={className} onBlur={onBlur} value={value} type={type} placeholder={placeholder} onChange={onChange} name={name}/>
    );
};

export default Input;