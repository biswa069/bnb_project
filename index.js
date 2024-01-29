import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const port = 3000;
const app  = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",async (req,res)=>{
   res.render("index.ejs");
}); 

app.get("/about",async(req,res)=>{
    res.render("about.ejs");
})
app.listen(port,()=>{
    console.log(`app is live at http://localhost${port}`);
})