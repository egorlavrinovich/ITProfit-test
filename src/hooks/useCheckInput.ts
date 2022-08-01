import {useEffect, useState} from 'react'

export function useCheckInput(value:string,type:string,minlength=2,maxlength=30){
    const [isError,setErorr] = useState<boolean>(false)

    useEffect(()=>{
        function checkName(str:string,minlength:number,maxlength:number){
            const checkNameArray = str.split(' ');
            checkNameArray.map((item,index,arr)=>(
                item.length>=minlength&&
                item.length<=maxlength&&arr.length===2&&
                item!==''&&!/[а-яё]/i.test(item))?
                setErorr(false):setErorr(true))
        }

        function checkEmail(str:string){
            const findsymbols = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
            !(findsymbols.test(str))?setErorr(true):setErorr(false)
        }

        function checkPhone(str:string){
            const checkPhoneArr = str.split('');
            const checkSymbols = checkPhoneArr.map(item=>/^[0-9()+]*$/.test(item)).filter(item=>!item);
            (/^7*$/.test(checkPhoneArr[1])&&!checkSymbols.length&&checkPhoneArr.length===14)?setErorr(false):setErorr(true)
        }
        function checkDate(str:any) {
            (str==='')?setErorr(true):setErorr(false)
        }
        function checkMessage(str:string){
            (str.length<10||str.length>300)?setErorr(true):setErorr(false)
        }
        switch (type){
            case 'checkname':checkName(value, minlength,maxlength)
                break
            case 'checkemail':checkEmail(value)
                break
            case 'checkphone': checkPhone(value)
                break
            case 'checkdate': checkDate(value)
                break
            case 'checkmessage':checkMessage(value)
                break
        }
    },[value,type,minlength,maxlength])
    return {isError}
}

console.log(/^[0-9]*$/.test('+7(444)'))