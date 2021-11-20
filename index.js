// comandos para iniciar o projeto
//npm init -y          inicia um projeto node
//npm i express        instala as dependencias do express
//npm i cors           instala a lib CORS para tratar as requisicoes
//npm i mongoose       instala a lib para trabalhar com mongo db
//npm i dotenv         instala a lib para tratativa de var de ambiente

const express = require("express");  //chamando o express
const app = express();  
require('dotenv').config(); 
const cors = require("cors");  
app.use(express.json()); 

const Conn = require("./model/conn/index"); 

Conn(); 
app.use(cors()); 
app.options("*", cors()); 

app.get('/', (req,res) => {
    res.status(200).json({message:"Bem-Vindo a API HOBBYs. Escolha qual rota deseja acessar (animes, filmes, livros, musicas ou series)!"});
});

const FilmesRouter = require("./routers/filmes.routes");
app.use("/filmes", FilmesRouter);

const SeriesRouter = require("./routers/series.routes");
app.use("/series", SeriesRouter);

const MusicasRouter = require("./routers/musicas.routes");
app.use("/musicas", MusicasRouter);

const seriesRouter = require("./routers/series.routes");
app.use("/Series", seriesRouter);

const livrosRouter = require("./routers/livros.routes");
app.use("/Livros", livrosRouter);

const animesRouter = require("./routers/animes.routes");
app.use("/Animes", animesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});