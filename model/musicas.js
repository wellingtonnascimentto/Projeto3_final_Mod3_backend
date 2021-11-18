
const mongoose = require("mongoose");  

const musicaModel = new mongoose.Schema({ 
    genero: { type: String, required: true },
    duracao: { type: String, required: true },
    autor: { type: String, required: true },
    cantor: { type: String, required: true },
    imagem: { type: String, required: true },
});

const Musica = mongoose.model("Musica", musicaModel);  

module.exports = Musica; 