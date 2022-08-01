import React, {useState,useEffect} from 'react';
import Input from "./components/UI/Input/Input";
import TextArea from "./components/UI/TextArea/TextArea";
import {useChangeInput} from "./hooks/useChangeInput";
import {useCheckInput} from "./hooks/useCheckInput";
import {URLS} from "./.env/env";
import {sendDataFields} from './api/FetchFields'
import {useFetch} from "./hooks/useFetching";
function App() {
    const [isDisabled,setDisabled] = useState<boolean>(false)
    const initials = useChangeInput()
    const email = useChangeInput()
    const phoneNumber = useChangeInput()
    const date = useChangeInput()
    const userMessage = useChangeInput()
    const nameFilter = useCheckInput(initials.str,'checkname',3,30)
    const emailChecker = useCheckInput(email.str,'checkemail')
    const phoneNumberChecker = useCheckInput(phoneNumber.str,'checkphone')
    const dateChecker = useCheckInput(date.str,'checkdate')
    const messageChecker = useCheckInput(userMessage.str,'checkmessage')
    const [data,setData] = useState<string[]>([])
    const dataFields = [initials,email,phoneNumber,date,userMessage]

    useEffect(()=>{
        if(!nameFilter.isError&&!emailChecker.isError&&!phoneNumberChecker.isError&&!dateChecker.isError&&!messageChecker.isError){
            setDisabled(true)
        }
        else setDisabled(false)
    },[nameFilter.isError,emailChecker.isError,phoneNumberChecker.isError,dateChecker.isError,messageChecker.isError])

    const {fetching, Load, Error, Sucsess} = useFetch(
        async ()=> await sendDataFields({method:'POST',url:URLS.URL,body:[data]})
    )

    function setNumber(e:React.ChangeEvent<HTMLInputElement>) {
        const symbol = e.target.value;
        if(phoneNumber.str.length<symbol.length){
            if(!phoneNumber.str) phoneNumber.setStr('')
            if(['7','8','9'].includes(symbol)&&phoneNumber.str.length<1) phoneNumber.setStr(`+7(${e.target.value}`)
            if(phoneNumber.str.length>2) phoneNumber.setStr(symbol)
            if(phoneNumber.str.length===5) phoneNumber.setStr(`${symbol})`)}
        else phoneNumber.setStr(symbol)
    }      

    async function CheckFieldsInput(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        dataFields.map(item=>item.OnBlur(true))
        if(isDisabled&&!Load){
            setData(dataFields.map(item=>item.str));
            await fetching();
        }
    }
    useEffect(()=>{
        if(isDisabled&&Sucsess){
            dataFields.map(item=> {
                item.setStr('');
                item.OnBlur(false)
            })
        }
    },[Sucsess,isDisabled])

  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner' noValidate>
                <Input
                    value={initials.str.toUpperCase()}
                    onChange={initials.ChangeState}
                    onBlur={initials.OnBlur}
                    isBlur={initials.isBlur}
                    isFilter={nameFilter.isError}
                    Name='Имя и Фамилия'
                    className='text-field__input'
                    type='text'
                    placeholder='Имя и Фамилия'/>
                <Input
                    value={email.str}
                    onChange={email.ChangeState}
                    onBlur={email.OnBlur}
                    isBlur={email.isBlur}
                    isFilter={emailChecker.isError}
                    Name='Адрес почты'
                    className='text-field__input'
                    type='email'
                    placeholder='Адрес почты' />
                <Input
                    value={phoneNumber.str}
                    onChange={setNumber}
                    onBlur={phoneNumber.OnBlur}
                    isBlur={phoneNumber.isBlur}
                    isFilter={phoneNumberChecker.isError}
                    Name='Номер телефона'
                    className='text-field__input'
                    type='tel'
                    placeholder='Номер телефона'/>
                <Input
                    value={date.str}
                    onChange={date.ChangeState}
                    onBlur={date.OnBlur}
                    isBlur={date.isBlur}
                    isFilter={dateChecker.isError}
                    Name='Выберете дату'
                    className="text-field__input"
                    type='date'/>
                <TextArea
                    value={userMessage.str}
                    onChange={userMessage.ChangeState}
                    onBlur={userMessage.OnBlur}
                    isBlur={userMessage.isBlur}
                    isFilter={messageChecker.isError}/>
                <button className='form-send' onClick={CheckFieldsInput}>Отправить</button>
                {Error&&<div className='error'>{Error}</div>}
                {Sucsess&&<div className='Sucsess'>{Sucsess}</div>}
    
            </form>
        </div>
   </div>
  );
}

export default App;
