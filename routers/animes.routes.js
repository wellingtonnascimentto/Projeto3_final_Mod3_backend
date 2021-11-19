const express = require("express"); 
const router = express.Router(); 
const animesController = require('../controller/animes.controller'); 

router.get('/', (req,res) => {
    res.status(200).json({message:"rota animes OK!"});
});

router.post("/add", animesController);

router.get("/listall", animesController);

router.get("/listid/:id", animesController);

router.put("/update/:id", animesController);

router.delete("/delete/:id", animesController);

module.exports = router;