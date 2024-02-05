


class ProductManager {
    product = [];
    constructor(){}
    getProduct(){
        console.log(this.product);
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
    const producto = new ProductManager();
    producto.addProduct(``,`cebolla`,`chica`,50,`imagencebolla`,``,10);
    producto.addProduct(``,`calabaza`,`grande`,80,`imagencalabaza`,``,13);
    producto.addProduct(``,`papa`,`blanca`,60,`imagenpapa`,``,40); 
    producto.getProduct();
