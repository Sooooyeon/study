const express = require("express");
const router = express.Router();
const upload = require("../../module/multer");
const postCtr = require("../../controller/postCtr")

router.get("/upload",(req,res)=>{
    res.render("upload");
});

router.get("/:id",(req,res)=>{
    res.render("detail");
});

router.get("/update/:id",(req,res)=>{
    res.render("update");
});

router.post("/",upload.single("image"),postCtr.upload);




module.exports = router;