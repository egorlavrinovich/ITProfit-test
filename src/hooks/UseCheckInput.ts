import {useEffect, useState} from 'react'

export function UseCheckInput(value:string,type:string,minlength=2,maxlength=30){
    const [error,seterror] = useState<boolean>(false)

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
            const CheckPhoneArr = str.split('');
            const result =  CheckPhoneArr.filter(item=>item!='+');
            (/^7*$/.test(result[0])&&result.length===11)?seterror(false):seterror(true)
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
    return {error}
}