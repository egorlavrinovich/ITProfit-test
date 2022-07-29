import React, {FC, FocusEventHandler} from 'react';
import Error from "../Error/Error";

interface IInput{
    type:string;
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:React.EventHandler<any>;
    className?:string;
    Name?:string;
    Filter?:boolean;
    Blur?:any;
}

const Input:FC<IInput> = ({onBlur,type,name,placeholder,value,onChange,className,Name,Filter,Blur}) => {
    return (
        <div className="text-field text-field_floating">
        <input className={className} onBlur={onBlur} value={value} type={type} placeholder={placeholder} onChange={onChange} name={name}/>
            <label className="text-field__label" htmlFor='input'>{Name}</label>
            <Error Filter={Filter} Blur={Blur} Name={Name}/>
        </div>
    );
};

export default Input;