const express = require("express");

const app = express();
const port = 8080;
const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

server.on("error", (error) => {
  console.error(error);
});


class Memoria{
    constructor(){
        this.array = [];
        this.count = 0;
    }

    getArray(){
        return this.array
    }
    getProductById(id){
        const result = this.array.find((producto => producto.id == id))
        return result
    }

    addElement(objeto){
        this.array.push({...objeto,id:this.count+1});
        this.count++
        return objeto
    }
}

const memoria = new Memoria();

memoria.addElement({
    id: 01,
    title: "Producto 1",
    price: 500,
    thumbnail: "imagen.jpg"
})

app.get("/api/productos/listar", (req, res) => {
    if(!memoria.getArray().length){ 
        res.json({error: 'no hay productos cargados'});
    }

    res.json(memoria.getArray())
});

app.get("/api/productos/listar/:id", (req, res) => {
    const id = req.params.id;
    if(!memoria.getProductById(id)){
        res.json({error: 'producto no encontrado'});
    }
    res.json(memoria.getProductById(id));
    res.status(200).send()
  });

  app.post("/productos/guardar/post", (req, res) => {
    
    const producto = req.body;
    console.log(producto)
    memoria.addElement(producto);
    res.sendStatus(201);
  });