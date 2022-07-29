import React, {FC, FocusEventHandler} from 'react';

interface ITextArea{
    placeholder?:string;
    value?:string|any;
    onChange?:React.ChangeEventHandler | undefined;
    name?:string;
    onBlur?:React.EventHandler<any>;
    className?:string;
    Name?:string;
}

const TextArea:FC<ITextArea> = () => {
    return (
        <div className="text-field text-field_floating">
            <textarea maxLength={300} rows={6} cols={80} className='text-field__textarea' name='text-field__textarea'/>
            <label className="text-field__label__textarea" htmlFor='textarea'>Введите сообщение</label>
        </div>
    );
};

export default TextArea;