import React, {FC, FocusEventHandler} from 'react';

interface IInput{
    type:string;
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:React.EventHandler<any>;
    className?:string;
    Name?:string;
}

const Input:FC<IInput> = ({onBlur,type,name,placeholder,value,onChange,className,Name}) => {
    return (
        <div className="text-field text-field_floating">
        <input className={className} onBlur={onBlur} value={value} type={type} placeholder={placeholder} onChange={onChange} name={name}/>
            <label className="text-field__label" htmlFor={name}>{Name}</label>
        </div>
    );
};

export default Input;