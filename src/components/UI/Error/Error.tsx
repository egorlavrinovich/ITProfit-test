import React, {FC} from 'react';

interface IError{
    Blur:any;
    Filter:any;
    Name?:string|undefined;
}

const Error:FC<IError> = ({Blur,Filter,Name}) => {
    return (
        <>
            {Blur&&Filter&&<span className='Error'>Ошибка ввода</span>}
        </>
    );
};

export default Error;