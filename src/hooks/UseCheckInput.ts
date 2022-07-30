import {useEffect, useState} from 'react'

export function UseCheckInput(value:string,type:string,minlength=2,maxlength=30){
    const [error,seterror] = useState<boolean>(true)

    useEffect(()=>{
        function Countlength(str:string,minlength:number,maxlength:number){
            const array = str.split(' ');
            const result = array.map((item,index,arr)=>(item.length>minlength&&item.length<maxlength&&arr.length===2&&item!=''&&!/[а-яё]/i.test(item))?seterror(false):seterror(true))
            console.log(result)
        }

        function CheckEmail(str:string){
            const findsymbols = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            !(findsymbols.test(str))?seterror(true):seterror(false)
        }

        function CheckPass(str:string){
            const findSymbols = /^[A-Za-z]\w{7,14}$/;
            !findSymbols.test(str)?seterror(true):seterror(false)
        }
        function CheckPasses(firstpass:string,secoondpass:string){
            (firstpass!=secoondpass)?seterror(true):seterror(false)
        }
        switch (type){
            case 'length':Countlength(value, minlength,maxlength)
                break
            case 'email':CheckEmail(value)
                break
            case 'pass': CheckPass(value)
                break
            default:CheckPasses(value,type)
                break
        }
    },[value])
    return {error}
}