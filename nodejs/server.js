const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('hello, world');
});
const porta = 3000;
app.listen(port, () =>{
    console.log('Servidor rodando na porta: ' + porta)
});