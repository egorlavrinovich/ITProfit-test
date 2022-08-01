import { useState } from "react";

export const useFetch = (request:any) => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [sucsess,setSucsess] = useState('')
    const fetching = async () => {
        try {
            setLoad(true);
            await request();
            setError('')
            setSucsess('Данные отправлены')
        } catch (error:any) {
            setError(error.message);
            setSucsess('')
        } finally {
            setLoad(false);
            setTimeout(()=>{
                setSucsess('')
            },3000)
        }
    };
    return {fetching, load, error,sucsess};
};
