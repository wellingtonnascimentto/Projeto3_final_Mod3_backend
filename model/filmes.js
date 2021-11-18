const mongoose = require("mongoose");  //importando o mongoose

const FilmesModel = new mongoose.Schema({
    nome: { type: String, required: true},
    diretor: { type: String, required: true},
    duracao: { type: String, required: true},
    genero: { type: String, required: true},
    imagemUrl: { type: String, required: true},
    atores: { type: String, required: true},
    dataCriacao: { type: Date, default: Date.now }
});

const Filmes = mongoose.model("Filmes",FilmesModel);

module.exports = Filmes;