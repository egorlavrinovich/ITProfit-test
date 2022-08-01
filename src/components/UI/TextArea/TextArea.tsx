import React, {FC} from 'react';
import Error from "../Error/Error";

interface ITextArea{
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:any;
    isFilter?:boolean;
    isBlur?:any;
}

const TextArea:FC<ITextArea> =
    ({   onBlur,
         name,
         placeholder,
         value,
         onChange,
         isBlur,
         isFilter}) => {
    return (
        <div className="text-field text-field_floating">
            <textarea value={value}
                      name={name}
                      onClick={()=>onBlur(true)}
                      onBlur={()=>onBlur(false)}
                      onChange={onChange}
                      maxLength={301}
                      rows={11}
                      className='text-field__textarea'
                      placeholder={placeholder}/>
            <label className="text-field__label__textarea" htmlFor='textarea'>Введите сообщение</label>
            <>{isBlur&&isFilter&&<Error/>}</>
        </div>
    );
};

export default TextArea;