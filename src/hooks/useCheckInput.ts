import {useEffect, useState} from 'react'

export function useCheckInput(value:string,type:string,minlength=2,maxlength=30){
    const [isError,seterror] = useState<boolean>(false)

    useEffect(()=>{
        function CheckName(str:string,minlength:number,maxlength:number){
            const CheckNameArray = str.split(' ');
            CheckNameArray.map((item,index,arr)=>(
                item.length>=minlength&&
                item.length<=maxlength&&arr.length===2&&
                item!==''&&!/[а-яё]/i.test(item))?
                seterror(false):seterror(true))
        }

        function CheckEmail(str:string){
            const findsymbols = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            !(findsymbols.test(str))?seterror(true):seterror(false)
        }

        function CheckPhone(str:string){
            const checkPhoneArr = str.split('');
            const checkSymbols = checkPhoneArr.map(item=>/^[0-9()+]*$/.test(item)).filter(item=>!item);
            (/^7*$/.test(checkPhoneArr[1])&&!checkSymbols.length&&checkPhoneArr.length===14)?seterror(false):seterror(true)
        }
        function CheckDate(str:any) {
            (str==='')?seterror(true):seterror(false)
        }
        function CheckMessage(str:string){
            (str.length<10||str.length>300)?seterror(true):seterror(false)
        }
        switch (type){
            case 'checkname':CheckName(value, minlength,maxlength)
                break
            case 'checkemail':CheckEmail(value)
                break
            case 'checkphone': CheckPhone(value)
                break
            case 'checkdate': CheckDate(value)
                break
            case 'checkmessage':CheckMessage(value)
                break
        }
    },[value])
    return {isError}
}

console.log(/^[0-9]*$/.test('+7(444)'))