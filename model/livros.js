const mongoose = require("mongoose");

const livrosModel = new mongoose.Schema({ 
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String, required: true },
    capitulos: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Livro = mongoose.model("Livros", livrosModel);

module.exports = Livro;