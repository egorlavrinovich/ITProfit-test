import React, {useState,useEffect} from 'react';
import Input from "./components/UI/Input/Input";
import TextArea from "./components/UI/TextArea/TextArea";
import {UseChangeInput} from "./hooks/UseChangeInput";
import {UseCheckInput} from "./hooks/UseCheckInput";
import {URL} from "./enum/Enum";
import {SendDataFields} from './API/FetchFields'
import {Fetch} from "./hooks/UseFetching";
function App() {
    const [disabled,setdisabled] = useState<boolean>(false) // делаем кнопку регистрации disabled or not
    const Initials = UseChangeInput()
    const Email = UseChangeInput()
    const PhoneNumber = UseChangeInput()
    const Date = UseChangeInput()
    const UserMessage = UseChangeInput()
    const NameFilter = UseCheckInput(Initials.str,'checkname',3,30)
    const EmailChecker = UseCheckInput(Email.str,'checkemail')
    const PhoneNumberChecker = UseCheckInput(PhoneNumber.str,'checkphone')
    const DateChecker = UseCheckInput(Date.str,'checkdate')
    const MessageChecker = UseCheckInput(UserMessage.str,'checkmessage')
    const [Data,SetData] = useState<string[]>([])
    const [Error,SetError] = useState<any>()

    useEffect(()=>{
        if(!NameFilter.error&&!EmailChecker.error&&!PhoneNumberChecker.error&&!DateChecker.error&&!MessageChecker.error){
            setdisabled(true)

        }
        else setdisabled(false)
    },[NameFilter.error,EmailChecker.error,PhoneNumberChecker.error,DateChecker.error,MessageChecker.error])

    async function SendData (){
        try {
            const result = await SendDataFields({method:'POST',url:'https://jsonplaceholder.typicode.com/post',body:[Data]})
            console.log(result)
        }
        catch (e:any){
            console.log(e.message)
        }
    }
    function CheckFieldsInput(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const CheckFields = [Initials,Email,PhoneNumber,Date,UserMessage].map(item=>item.str===''&&item.OnBlur(true))
        if(!CheckFields.includes(undefined)&&disabled){
            SetData([Initials.str,Email.str,PhoneNumber.str,Date.str,UserMessage.str]);
            SendData()
        }
    }
  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner' noValidate>
                <Input value={Initials.str.toUpperCase()} onChange={Initials.ChangeState} onBlur={Initials.OnBlur} Blur={Initials.blur} Filter={NameFilter.error}  Name='Имя и Фамилия' className='text-field__input' type='text' placeholder='Имя и Фамилия'/>
                <Input value={Email.str} onChange={Email.ChangeState} onBlur={Email.OnBlur} Blur={Email.blur} Filter={EmailChecker.error} Name='Адрес почты' className='text-field__input' type='email' placeholder='Адрес почты' />
                <Input value={PhoneNumber.str} onChange={PhoneNumber.ChangeState} onBlur={PhoneNumber.OnBlur} Blur={PhoneNumber.blur} Filter={PhoneNumberChecker.error} Name='Номер телефона' className='text-field__input' type='tel' placeholder='Номер телефона'/>
                <Input value={Date.str} onChange={Date.ChangeState} onBlur={Date.OnBlur} Blur={Date.blur} Filter={DateChecker.error} Name='Выберете дату' className="text-field__input" type='date'/>
                <TextArea value={UserMessage.str} onChange={UserMessage.ChangeState} onBlur={UserMessage.OnBlur} Blur={UserMessage.blur} Filter={MessageChecker.error}/>
                <button className='form-send' onClick={CheckFieldsInput}>Отправить</button>
            </form>
        </div>
   </div>
  );
}

export default App;
