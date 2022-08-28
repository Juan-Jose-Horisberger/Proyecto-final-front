import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000" //Solo admite este direccion
    }
});

let onlineUsers = []; //Si ya tenemos nuestro usuario agregado en este array, no lo agregamos de nuevo

//Se ve que el ID que se agrega por default de socket, le cambio el nombre a socketId aca
const addNewUser = (username, usernameid, socketId) => {
    const id = parseInt(usernameid);
    console.log(username, usernameid, socketId)
    !onlineUsers.some((user) => user.username === username) &&
        onlineUsers.push({ username, id, socketId });
};


//Cada ves que salgamos de nuestra aplicacion eliminamos nuestro user
const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId)
}

const getUser = (usernameid) => { //Tomamos un usuario en concreto.
    return onlineUsers.find((user) => user.id === usernameid); 
};

io.on("connection", (socket) => {
    io.emit("firstEvent", "Hola esto es una prueba!") //Enviamos un evento a cada user, (podemos hacer aca, lo de notifcaciones de new product)
    // io.emit("newProducts", "¡Se agregaron nuevos productos!")
    socket.on("newUser", (username, usernameid) => { //Guardamos el user cuando se loggue en la pagina.
        addNewUser(username, usernameid, socket.id);
    })

    socket.on("sendNotification", ({ senderName, recipientId, type }) => {
        const receiver = getUser(recipientId);
        // console.log(receiver)
        // console.log(onlineUsers)
        // console.log(receiver.socketId);
        console.log(senderName, recipientId)

        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            type,
            recipientId
        });
    });

    io.emit("newProducts", "¡Se agregaron nuevos productos!")
    socket.on("disconnect", () => {//Cada vez que el usuario se desconecte

        removeUser(socket.id) //No es un evento no estamos tomando nada del lado del cliente, solo elimina el usuario de el array cuando este se desconecte
    })
});

io.listen(5000); //Servidor socket en el puerto 5000







/*
import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:3000",
    },
});

let onlineUsers = [];

const addNewUser = (username, usernameid, socketId) => {
    const id = parseInt(usernameid);
    console.log(username, usernameid, socketId)
    !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, id, socketId });
};

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (usernameid) => {
    return onlineUsers.find((user) => user.id === usernameid); 
};

io.on("connection", (socket) => {
    socket.on("newUser", (username, usernameid) => { //Aca lo que podria hacer es guardar el name del user + el id que tenga, y ademas crear un id socket como lo hicimos antes, para que eventualmente cuando quisieramos buscar un usuario en especifico en getUser, le pasemos el id que nosotros tenemos a el evento, y luego con el resultado de esa busqueda, tomamos a dicho user pero con el id socket, como lo hicimos en el evento getNotification. Funciono.
        addNewUser(username, usernameid, socket.id);
    });

    socket.on("sendNotification", ({ senderName, recipientId, type }) => {
        const receiver = getUser(recipientId);
        // console.log(receiver)
        // console.log(onlineUsers)
        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            type,
        });
    });

    socket.on("sendText", ({ senderName, recipientId, text }) => {
        const receiver = getUser(recipientId);
        io.to(receiver.socketId).emit("getText", {
            senderName,
            text,
        });
    });

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });
});

io.listen(5000);
*/