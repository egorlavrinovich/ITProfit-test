import React, {FC} from 'react';

interface IError{
    Name?:string|undefined;
}

const Error:FC<IError> = ({Name}) => {
    return (
        <>
            <span className='Error'>Ошибка ввода</span>
        </>
    );
};

export default Error;