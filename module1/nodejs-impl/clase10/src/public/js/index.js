const socket = io();
socket.emit("message", "Hola, me estoy comunicando con un websocket!");

socket.on('evento_socket_individual', data => {
    console.log(data);
});

socket.on('evento_para_todos_excepto_socket_actual', data => {
    console.log(data);
});

socket.on('evento_para_todos', data => {
    console.log(data);
});