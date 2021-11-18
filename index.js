// comandos para iniciar o projeto
//npm init -y          inicia um projeto node
//npm i express        instala as dependencias do express
//npm i cors           instala a lib CORS para tratar as requisicoes
//npm i mongoose       instala a lib para trabalhar com mongo db
//npm i dotenv         instala a lib para tratativa de var de ambiente

const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config(); // config do .env para acessar as VARs de ambiente
const cors = require("cors");  // importando o CORS para nosso APP
app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

app.use(cors()); // usando o CORS no APP
app.options("*", cors()); // Configurando o CORS para liberar todo trafego.

app.get('/', (req,res) => {
    res.status(200).json({message:"Bem-Vindo a API HOBBYs. Escolha qual rota deseja acessar (animes, filmes, livros, musicas ou series)!"});
});

const FilmesRouter = require("./routers/Filmes.routes");
app.use("/Filmes", FilmesRouter);

const musicasRouter = require("./routers/musicas.routers");
app.use("/Musicas", musicasRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});