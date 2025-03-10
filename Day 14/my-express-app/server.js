const express = require("express");
const app = express();

//Sample Data
const users =[
    {id: 1, name:"Alice"},
    {id:2, name:"Bob"},
];

const products = [
    {id:1, name:"Laptop", price:999},
    {id:2, name:"Phone", price: 699},
];

//Routing...

app.get("/", (req,res) =>
    res.send("Welcome to my API!"));

app.get("/users", (req,res)=>
    res.json(users));

app.get("/products", (req,res)=>
    res.json(products));


//Start server...
const PORT = 3000;
app.listen(PORT, () =>
console.log(`Server running on http://localhost:${PORT}`));