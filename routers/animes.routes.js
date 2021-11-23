const express = require("express"); 
const router = express.Router(); 
const animesController = require('../controller/animes.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota animes OK!"});
});

router.post("/add", animesController.postAdd);

router.get("/listall", animesController.getListall);

router.get("/listid/:id", animesController.getListid);

router.put("/update/:id", animesController.putUpdate);

router.delete("/delete/:id", animesController.delDelete);

module.exports = router;