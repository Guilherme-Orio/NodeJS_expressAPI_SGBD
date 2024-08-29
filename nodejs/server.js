const express = require("express");
const app = express();
const sql = require("mssql")

app.get('/', (req, res) =>{
    res.send('hello, world');
});
const porta = 3000;
app.listen(porta, () =>{
    console.log("Servidor rodando na porta: " + porta);
});