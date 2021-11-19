const express = require("express"); //import do express
const router = express.Router(); //define app como express
const MusicasController = require('./../controller/musicas.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Musicas OK!"});
});

router.post("/add", MusicasController);

router.get("/listall", MusicasController);

router.get("/listid/:id", MusicasController);

router.put("/update/:id", MusicasController);

router.delete("/delete/:id", MusicasController);

module.exports = router;