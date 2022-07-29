import React, {useState,useEffect} from 'react';
import Input from "./components/UI/Input/Input";
import TextArea from "./components/UI/TextArea/TextArea";
import {UseChangeInput} from "./hooks/UseChangeInput";
import {UseCheckInput} from "./hooks/UseCheckInput";
function App() {
    const [disabled,setdisabled] = useState<boolean>(true) // делаем кнопку регистрации disabled or not
    const Initials = UseChangeInput()
    const Email = UseChangeInput()
    const PhoneNumber = UseChangeInput()
    const Date = UseChangeInput()
    const UserMessage = UseChangeInput()
    const NameFilter = UseCheckInput(Initials.str,'length',2) // делаем проверку на кол-во символов в имени
    const EmailChecker = UseCheckInput(Email.str,'email') // делаем проверку на email
    const PhoneNumberChecker = UseCheckInput(PhoneNumber.str,'pass') // делаем проверку на pass
    const MatchPasses = UseCheckInput(UserMessage.str,'message') // делаем проверку на совпадение паролей

    useEffect(()=>{
        if(!NameFilter.error&&!EmailChecker.error&&!PhoneNumberChecker.error&&!MatchPasses.error){
            setdisabled(false)
        }
    },[NameFilter.error,EmailChecker.error,PhoneNumberChecker.error,MatchPasses.error])
  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner'>
                <Input value={Initials.str} onChange={Initials.ChangeState} onBlur={Initials.OnBlur} Blur={Initials.blur} Filter={NameFilter.error}  Name='Имя и Фамилия' className='text-field__input' type='text' placeholder='Имя и Фамилия'/>
                <Input value={Email.str} onChange={Email.ChangeState} onBlur={Email.OnBlur} Blur={Email.blur} Filter={EmailChecker.error} Name='Адрес почты' className='text-field__input' type='email' placeholder='Адрес почты' />
                <Input value={PhoneNumber.str} onChange={PhoneNumber.ChangeState} onBlur={PhoneNumber.OnBlur} Blur={PhoneNumber.blur} Filter={PhoneNumberChecker.error} Name='Номер телефона' className='text-field__input' type='tel' placeholder='Номер телефона'/>
                <Input value={Date.str} onChange={Date.ChangeState} Name='Выберете дату'  className="text-field__input" type='date'/>
                <TextArea value={UserMessage.str} onChange={UserMessage.ChangeState} onBlur={PhoneNumber.OnBlur} Blur={PhoneNumber.blur} Filter={PhoneNumberChecker.error}/>
                <button className='form-send'>Отправить</button>
            </form>
        </div>
   </div>
  );
}

export default App;
