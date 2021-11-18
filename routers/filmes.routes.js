const express = require("express"); //import do express
const router = express.Router(); //define app como express
const FilmesController = require('./../controller/filmes.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota Filmes OK!"});
});

router.post("/add", FilmesController);

router.get("/listall", FilmesController);

router.get("/listid/:id", FilmesController);

router.put("/update/:id", FilmesController);

router.delete("/delete/:id", FilmesController);

module.exports = router;