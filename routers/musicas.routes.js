const express = require("express"); //import do express
const router = express.Router(); //define app como express
const musicasController = require('./../controller/musicas.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota Musicas OK!"});
});

router.post("/add/musica", musicasController);

router.get("/listall/musica", musicasController);

router.get("/listid/musica/:id", musicasController);

router.put("/update/musica/:id", musicasController);

router.delete("/delete/musica/:id", musicasController);

module.exports = router;