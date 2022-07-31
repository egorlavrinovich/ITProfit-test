import { useState } from "react";

export const Fetch = (request:any) => {
    const [Load, SetLoad] = useState(false);
    const [Error, SetError] = useState('');
    const [Sucsess,SetSucsess] = useState('')
    const fetching = async () => {
        try {
            SetLoad(true);
            await request();
            SetError('')
            SetSucsess('Данные отправлены')
        } catch (error:any) {
            SetError(error.message);
            SetSucsess('')
        } finally {
            SetLoad(false);
            setTimeout(()=>{
                SetSucsess('')
            },3000)
        }
    };
    return {fetching, Load, Error,Sucsess};
};
