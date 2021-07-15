const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:3000",
    },
});

let users = [];

const addUser = (userId, socketId) => {
    !userid.some(user => user.userId === userId) && user.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

io.on("connection", (socket) => {
    console.log("a user has connected...");

    //after connection take user id and socket id
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    socket.on("disconnect", (socket) => {
        console.log("user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });

});
