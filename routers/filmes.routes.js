const express = require("express"); 
const router = express.Router(); 
const FilmesController = require('./../controller/filmes.controller');

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Filmes OK!"});
});

router.post("/add", FilmesController.postAdd);

router.get("/listall", FilmesController.getListall);

router.get("/listid/:id", FilmesController.getListid);

router.put("/update/:id", FilmesController.putUpdate);

router.delete("/delete/:id", FilmesController.delDelete);

module.exports = router;