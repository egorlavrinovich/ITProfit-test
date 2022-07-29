import React, {useState} from 'react';
import Input from "./components/UI/Input/Input";
import TextArea from "./components/UI/TextArea/TextArea";

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
                <Input Name='Выберете дату'  className="text-field__input" type='date'/>
                <TextArea/>
                <button className='form-send'>Отправить</button>
            </form>
        </div>
   </div>
  );
}

export default App;
