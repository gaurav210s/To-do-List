import express from "express"; 
import bodyParser from "body-parser";

const app = express(); 
const port = 3000; 

app.use(bodyParser.urlencoded({extended : true})); 
app.use(express.static("public")); 

let newItems = []; 

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();
let day = today.toLocaleDateString("en-US", options);

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType : day, tasks : newItems});  
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem; 
    newItems.push(newItem);
    res.redirect("/"); 
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`); 
})