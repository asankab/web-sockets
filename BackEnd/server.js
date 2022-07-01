const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    // method: ["GET", "POST"],
    // allowHeaders: ["my-customer-header"],
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("socket :", socket);
  console.log("socketis active to be connetced");

  socket.on("chat", (payload) => {
    console.log("payload :", payload);
    io.emit("chat", payload);
  });
});

// app.listen(5000, () => console.log("server is active.."));
server.listen(5000, () => console.log("server is listning at port 5000.."));
