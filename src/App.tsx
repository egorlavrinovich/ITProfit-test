import React, {useState} from 'react';
import Input from "./components/UI/Input/Input";

function App() {
    const [state,setstate] = useState('')
  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner'>
                <Input className='input' type='text' placeholder='Имя и Фамилия'/>
                <Input className='input' type='email' placeholder='Адрес почты'/>
                <Input className='input' type='tel' placeholder='Номер телефона'/>
                <Input className="input" type='date'/>
                <textarea className='input' value={state} onChange={(e)=>setstate(e.target.value)} placeholder='Введите сообещние...'/>
                <button className='form-send'>Отправить</button>
            </form>
        </div>
   </div>
  );
}

export default App;
