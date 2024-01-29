import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const port = 80;
const app  = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",async (req,res)=>{
   res.render("index.ejs");
}); 

app.get("/about",async(req,res)=>{
    res.render("about.ejs");
});


const cred = [];
app.post('/submit', (req, res) => {
    const {name,email,contact} = req.body;

    let newUser = {
        name,
        email,
        contact,
      };

     cred.push(newUser); 
      console.log(cred);
});


app.get("/contact", async(req,res)=>{
    res.render("contact.ejs");
})

app.listen(port,()=>{
    console.log(`app is live at http://localhost${port}`);
})
