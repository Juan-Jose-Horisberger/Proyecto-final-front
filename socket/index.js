import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000" //Solo admite este direccion
    }
});

let onlineUsers = []; //Si ya tenemos nuestro usuario agregado en este array, no lo agregamos de nuevo

const addNewUser = (username, socketId) => { //Agregamos user con nombre y id identificatorio
    !onlineUsers.some(user => user.username === username) && onlineUsers.push({username, socketId})
}

//Cada ves que salgamos de nuestra aplicacion eliminamos nuestro user
const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId)
}

const getUser = (username) => { //Tomamos un usuario en concreto.
    return onlineUsers.find(user => user.username === username);
}

io.on("connection", (socket) => {
    io.emit("firstEvent", "Hola esto es una prueba") //Enviamos un evento a cada user

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
    })

    socket.on("disconnect", () => {//Cada vez que el usuario se desconecte

        removeUser(socket.id) //No es un evento no estamos tomando nada del lado del cliente, solo elimina el usuario de el array cuando este se desconecte
    })
});

io.listen(5000);