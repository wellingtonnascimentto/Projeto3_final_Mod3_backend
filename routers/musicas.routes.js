const express = require("express"); 
const router = express.Router(); 
const musicasController = require('./../controller/musicas.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Rota Musicas OK!"});
});

router.post("/add", musicasController.postAdd);

router.get("/listall", musicasController.getListall);

router.get("/listid/:id", musicasController.getListid);

router.put("/update/:id", musicasController.putUpdate);

router.delete("/delete/:id", musicasController.delDelete);

module.exports = router;

