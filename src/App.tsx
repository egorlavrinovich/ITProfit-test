import React, {useState} from 'react';
import Input from "./components/UI/Input/Input";

function App() {
    const [state,setstate] = useState('')
  return (
   <div className='wrapper'>
        <div className='form-wrapper'>
            <div className='form-title'>Свяжитесь с нами</div>
            <form className='form-contaner'>
                <Input Name='Имя и Фамилия' className='text-field__input' type='text' placeholder='asd'/>
                <Input Name='Адрес почты' className='text-field__input' type='email' placeholder='asd' />
                <Input Name='Номер телефона' className='text-field__input' type='tel' placeholder='asd'/>
                <Input Name='Выберете дату' className="text-field__input" type='date'/>
                <div className="text-field text-field_floating">
                <textarea  name='text-field__input' value={state} onChange={(e)=>setstate(e.target.value)} placeholder='asd'/>
                <label className="text-field__label" htmlFor='textarea'>Введите сообщение</label>
                </div>
                <button className='form-send'>Отправить</button>
            </form>
        </div>
   </div>
  );
}

export default App;
