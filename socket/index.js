import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000" //Solo admite este direccion
    }
});

let onlineUsers = []; //Si ya tenemos nuestro usuario agregado en este array, no lo agregamos de nuevo

//Se ve que el ID que se agrega por default de socket, le cambio el nombre a socketId aca
const addNewUser = (username, socketId) => { //Agregamos user con nombre y id identificatorio, si es que ya no se encuentra agregado
    !onlineUsers.some(user => user.username === username) && onlineUsers.push({username, socketId})
    console.log(onlineUsers);
}

//Cada ves que salgamos de nuestra aplicacion eliminamos nuestro user
const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId)
}

const getUser = (username) => { //Tomamos un usuario en concreto.
    return onlineUsers.filter(user => user.username === username);
}

io.on("connection", (socket) => {
    io.emit("firstEvent", "Hola esto es una prueba!") //Enviamos un evento a cada user, (podemos hacer aca, lo de notifcaciones de new product)

    socket.on("newUser", (username) => {
        addNewUser(username, socket.id); //Se ve que por default con socket.id se le agrega un id
    })

    // socket.on("sendNotification", ({userIdentifier, userName}) => { //53:44
    //     const receiver = getUser(userName) //Obtenemos un usuario en concreto

    //     // io.to(receiver.socketId).emit("getNotification", { //Enviamos un evento a client, a un user en especifico
    //     //     userName,
    //     //     userIdentifier
    //     // })
        
    // })

    socket.on("disconnect", () => {//Cada vez que el usuario se desconecte

        removeUser(socket.id) //No es un evento no estamos tomando nada del lado del cliente, solo elimina el usuario de el array cuando este se desconecte
    })
});

io.listen(5000); //Servidor socket en el puerto 5000