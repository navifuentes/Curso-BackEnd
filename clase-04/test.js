import ProductManager from "./productManager.js";

const manager = new ProductManager();

const env = async () => {
  /*  let prueba1 = await manager.getProducts();
  console.log(prueba1); */

  /*   let objeto2 = await manager.addProduct(
    "pera de prueba",
    "esta es una pera de prueba",
    200,
    "sin imagen",
    "pra123",
    25
  );
  console.log(objeto2); */

  /*   let prueba2 = await manager.getProductById(4);
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

  let prueba4 = await manager.deleteProduct(2);
  console.log(prueba4);
};

env();
