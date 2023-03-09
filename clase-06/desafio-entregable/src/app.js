import ProductManager from "./productManager.js";
const manager = new ProductManager();
// Express
import express from "express";
import { error } from "console";
const app = express();

app.get("/products", async (req, res) => {
  try {
    const productsList = await manager.getProducts();
    const limit = Number(req.query.limit);
    if (!limit) {
      res.send(productsList);
    } else {
      const productListWithLimit = productsList.slice(0, limit);
      res.send(productListWithLimit);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/:pid", async (req, res) => {
  try {
    let id = req.params.pid;
    let productById = await manager.getProductById(Number(id));

    res.send(productById);
  } catch (error) {
    console.log(error);
  }
});

app.listen(8080, () => {
  try {
    console.log("Servidor arriba en el puerto 8080");
  } catch (error) {
    console.log(error);
  }
});

//const env = async () => {
/*  let prueba1 = await manager.getProducts();
  console.log(prueba1); */

/* let objeto2 = await manager.addProduct(
    "Banana de prueba",
    "esta es una Banana de prueba",
    200,
    "sin imagen",
    "Banana123",
    25
  );
  console.log(objeto2); */

/* let prueba2 = await manager.getProductById(3);
  console.log(prueba2); */

/*   let prueba3 = await manager.updateProduct(
    3,
    "melon",
    "esta es un melon de prueba",
    300,
    "sin imagen",
    "mln123",
    40
  );
  console.log(prueba3); */

/* let prueba4 = await manager.deleteProduct(1);
  console.log(prueba4); */
//};

//env();
