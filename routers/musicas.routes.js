const express = require("express"); 
const router = express.Router(); 
const musicasController = require('./../controller/musicas.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Musicas OK!"});
});

router.post("/add", musicasController);

router.get("/listall", musicasController);

router.get("/listid/:id", musicasController);

router.put("/update/:id", musicasController);

router.delete("/delete/:id", musicasController);

module.exports = router;