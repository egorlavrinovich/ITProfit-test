import React, {useState,useEffect} from 'react';
import Input from "./components/UI/Input/Input";
import TextArea from "./components/UI/TextArea/TextArea";
import {useChangeInput} from "./hooks/useChangeInput";
import {useCheckInput} from "./hooks/useCheckInput";
import {URLS} from "./.env/env";
import {sendDataFields} from './API/FetchFields'
// @ts-ignore
import {useFetch} from "./hooks/useFetching";
function App() {
    const [disabled,setdisabled] = useState<boolean>(false)
    const initials = useChangeInput()
    const email = useChangeInput()
    const phoneNumber = useChangeInput()
    const date = useChangeInput()
    const UserMessage = useChangeInput()
    const NameFilter = useCheckInput(initials.str,'checkname',3,30)
    const emailChecker = useCheckInput(email.str,'checkemail')
    const phoneNumberChecker = useCheckInput(phoneNumber.str,'checkphone')
    const dateChecker = useCheckInput(date.str,'checkdate')
    const messageChecker = useCheckInput(UserMessage.str,'checkmessage')
    const [data,setData] = useState<string[]>([])
    const dataFields = [initials,email,phoneNumber,date,UserMessage]

    useEffect(()=>{
        if(!NameFilter.error&&!emailChecker.error&&!phoneNumberChecker.error&&!dateChecker.error&&!messageChecker.error){
            setdisabled(true)
        }
        else setdisabled(false)
    },[NameFilter.error,emailChecker.error,phoneNumberChecker.error,dateChecker.error,messageChecker.error])

    const {fetching, Load, Error, Sucsess} = useFetch(
        async ()=> await sendDataFields({method:'POST',url:URLS.URL,body:[data]})
    )
    async function CheckFieldsInput(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        dataFields.map(item=>item.OnBlur(true))
        if(disabled&&!Load){
            setData(dataFields.map(item=>item.str));
            await fetching();
        }
    }
    useEffect(()=>{
        if(disabled){
            dataFields.map(item=> {
                item.setstr('');
                item.OnBlur(false)
            })
        }
    },[Sucsess])

  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner' noValidate>
                <Input
                    value={initials.str.toUpperCase()}
                    onChange={initials.ChangeState}
                    onBlur={initials.OnBlur}
                    Blur={initials.blur}
                    Filter={NameFilter.error}
                    Name='Имя и Фамилия'
                    className='text-field__input'
                    type='text'
                    placeholder='Имя и Фамилия'/>
                <Input
                    value={email.str}
                    onChange={email.ChangeState}
                    onBlur={email.OnBlur}
                    Blur={email.blur}
                    Filter={emailChecker.error}
                    Name='Адрес почты'
                    className='text-field__input'
                    type='email'
                    placeholder='Адрес почты' />
                <Input
                    value={phoneNumber.str}
                    onChange={phoneNumber.ChangeState}
                    onBlur={phoneNumber.OnBlur}
                    Blur={phoneNumber.blur}
                    Filter={phoneNumberChecker.error}
                    Name='Номер телефона'
                    className='text-field__input'
                    type='tel'
                    placeholder='Номер телефона'/>
                <Input
                    value={date.str}
                    onChange={date.ChangeState}
                    onBlur={date.OnBlur}
                    Blur={date.blur}
                    Filter={dateChecker.error}
                    Name='Выберете дату'
                    className="text-field__input"
                    type='date'/>
                <TextArea
                    value={UserMessage.str}
                    onChange={UserMessage.ChangeState}
                    onBlur={UserMessage.OnBlur}
                    Blur={UserMessage.blur}
                    Filter={messageChecker.error}/>
                <button className='form-send' onClick={CheckFieldsInput}>Отправить</button>
                {<>
                    {Error&&<div className='error'>{Error}</div>||Sucsess&&<div className='Sucsess'>{Sucsess}</div>}</>}
            </form>
        </div>
   </div>
  );
}

export default App;
