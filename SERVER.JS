const express = require("express");
const db =require("./database.db"); 
const userRoutes = require("./routes/user.routes.js");

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running on https://localhost:3000");
})


//linha 2 no SERVER.JS "database.db" nao é um módulo Javascript, eh um arquivo db
// vc tem q puxar o script q faz seu banco ali