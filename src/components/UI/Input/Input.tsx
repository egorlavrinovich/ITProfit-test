import React, {FC} from 'react';
import Error from "../Error/Error";

interface IInput{
    type:string;
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:any;
    className?:string;
    Name?:string;
    isFilter?:boolean;
    isBlur?:any;
}

const Input:FC<IInput> =
    ({  onBlur,
         type,
         name,
         placeholder,
         value,onChange,
         className,
         Name,
         isFilter,
         isBlur,}) => {
    return (
        <div className="text-field text-field_floating">
        <input className={className}
               onClick={()=>onBlur(true)}
               onBlur={()=>onBlur(false)}
               value={value}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               name={name}/>
            <label className="text-field__label" htmlFor='input'>{Name}</label>
            <>{isBlur&&isFilter&&<Error/>}</>
        </div>
    );
};

export default Input;