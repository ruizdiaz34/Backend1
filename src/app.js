const express=require("express");

const ProductManager=require("./app");

const PORT =6000;
const app=express();

const producto = new ProductManager ("./producto.json");

app.get("./ProductManager.js",(req, res)=>{
    let productos
    try {
        productos= producto.getProduct()
    } catch (error) {
        console.log(error.message)
    }
  

    res.json(producto)
});

app.listen(PORT, ()=>{
    console.log(`Server ON LINE en puerto ${PORT}`)
})