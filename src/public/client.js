
console.log('hola desde client.js')

const socket = io();

let chatBox = document.querySelector('#chatBox');

chatBox.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        socket.emit('message', chatBox.value);
        chatBox.value = '';
    }
    
});

// socket.on('history',data=>{
//     let history = document.querySelector('#history');
//     history.innerHTML = `[${data.texto}]`
// }) 
socket.on('history', data => {
    let history = document.getElementById('history')
    let mensajes = ""
    data.forEach(obj => {
        mensajes += `[${obj.userId}]: ${obj.texto}<br />`
    })
    history.innerHTML = mensajes
})