const MessageBoard = {
    load: ()=>{
        fetch('/messages').then((response) => {
                return response.json();
            }).then((myJson) => {
                console.log(myJson);
            });
        },
    save: (msg, pass)=>{
        let data = {
            message: msg,
            password: pass
        }
        fetch('/messages/save',{
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }).then((body) => {
            return body;
         })
    },
    delete: ()=>{},
    render: ()=>{}
}


document.querySelector('#save').addEventListener('click', () => {
    let msg = document.querySelector('#desc').value
    let pass = document.querySelector('#pass').value 
    MessageBoard.save( msg, pass)
})
