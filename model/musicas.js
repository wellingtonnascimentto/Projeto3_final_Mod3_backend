
const mongoose = require("mongoose");  

const musicasModel = new mongoose.Schema({ 
    genero: { type: String, required: true },
    duracao: { type: String, required: true },
    autor: { type: String, required: true },
    cantor: { type: String, required: true },
    imagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Musicas = mongoose.model("Musicas", musicasModel);  

module.exports = Musicas; 