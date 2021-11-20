const express = require("express"); 
const router = express.Router(); 
const FilmesController = require('./../controller/filmes.controller');

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Filmes OK!"});
});

router.post("/add", FilmesController);

router.get("/listall", FilmesController);

router.get("/listid/:id", FilmesController);

router.put("/update/:id", FilmesController);

router.delete("/delete/:id", FilmesController);

module.exports = router;