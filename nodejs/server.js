const express = require("express");
const server = express();
const sql = require("mssql");
const porta = 3000;
server.listen(porta, () => {
    console.log("servidor na porta http://localhost:3000");
    console.log("Para desligar: ctrl + c");
});

server.use(express.urlencoded({extended:true}));
server.use(express.static("public"));
server.post("/cadastro", (req, res) => {
    const {nome}
});

server.get('/', (req, res) =>{
    res.send('hello, world');
});
