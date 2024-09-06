const express = require('express');
const server = express();
const mysql = require("mysql2");
const porta = 3000;

server.listen(porta, () => {
    console.log("Servidor na porta http://localhost:3000");
    console.log("Para desligar: ctrl + c");
});

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(express.json());

// Conexão com o SGBD
var connection = mysql.createConnection({
    host: "localhost",
    user: "usuario_node",
    password: "951413",
    database: "bd_cadastro"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar o banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados");
});

server.get("/cadastro", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

server.post("/cadastro", (req, res) => {
    const { nomecompleto, email, numero, dtNascimento, cpf, senha, genero } = req.body;

    const query = 'INSERT INTO tb_cadastro (cpf, nome, email, numero, dt_nascimento, senha, genero) VALUES(?,?,?,?,?,?,?)';
    const values = [cpf, nomecompleto, email, numero, dtNascimento, senha, genero];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error("Erro ao inserir os dados:", err);
            res.status(500).json({ message: "Erro ao inserir dados" });
            return;
        }
        res.status(200).json({ message: "Cadastro realizado com sucesso" });
    });
});
