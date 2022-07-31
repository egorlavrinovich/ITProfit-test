interface ISendDataFields{
    method:string;
    url:any;
    body:any;
}

export async function SendDataFields (data:ISendDataFields){
    const headers ={
        'Content-Type':'application/json'
    }
    const response = await fetch(data.url,{
        method:data.method,
        body:JSON.stringify(data.body),
        headers:headers
    })
        if (response.ok){
            return 'sucsess'
        }
        else throw new SyntaxError(`Ошибка отправки: ${response.status}`)
}