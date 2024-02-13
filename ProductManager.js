


class ProductManager {
    product = [];
    constructor(){}
    getProduct(){
        
        console.log();
    }
    addProduct(id,title,description,price,thumbnail,code,stock){
        id = 0;
        for (let i = 0; i < this.product.length; i++) {
            const element = this.product[i];
            if(element.id > id){
                id = element.id;
            }    
        }
        id++;

        code = 1;
        for (let e = 0; e < this.product.length; e++) {
            const codigo = this.product[e];
            if(codigo.code > code){
                code = codigo.code;
            }    
        }
        code++;
        this.product.push({id,title,description,price,thumbnail,code,stock})
        
    }
    }

    const fs = require("fs")


    const producto = new ProductManager();
    producto.addProduct(``,`cebolla`,`chica`,50,`imagencebolla`,``,10);
    producto.addProduct(``,`calabaza`,`grande`,80,`imagencalabaza`,``,13);
    producto.addProduct(``,`papa`,`blanca`,60,`imagenpapa`,``,40); 
    producto.addProduct(``,`manzana`,`roja`,30,`imagenmanzana`,``,100);
    producto.getProduct();

    let rutaProducto = "./Productos/producto.json"

    fs.writeFileSync(rutaProducto, JSON.stringify(producto, null, 4))

    let mostrarProductos = JSON.parse(fs.readFileSync(rutaProducto, {encoding:"utf-8"}))

    console.log(mostrarProductos);
    


