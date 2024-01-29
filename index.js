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

app.get("/sport",async (req,res)=>{
    db.query("SELECT * FROM sport");
})
const cred = [];
app.post('/submit', (req, res) => {
    const {name,email,contact,location,message} = req.body;
    if(!name||!email||!contact||!location||!message){
     return  res.render("contact.ejs",{
        title:"Bad Cradential Plz fill the form correctly",
      });
     // res.json("there is error at server side");
    }

    let newUser = {
        name,
        email,
        contact,
        location,
        message,
      };

     cred.push(newUser); 
      console.log(cred);
      res.render("contact.ejs",{
        title:"Success fully Submited Your response"
      });
});


app.get("/contact", async(req,res)=>{
    res.render("contact.ejs",{
        title: "Contact information",
    });
})

app.listen(port,"172.22.1.63",()=>{
    console.log(`app is live at http://172.22.1.63:${port}`);
})
