import ProductManager from "./productManager.js";

const manager = new ProductManager();

const env = async () => {
  let product1 = await manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "sin imagen",
    "abc123",
    25
  );
  console.log(product1);
  let product2 = await manager.addProduct(
    "manzana",
    "es una fruta",
    100,
    "sin imagen",
    "mza123",
    300
  );
  console.log(product2);
  console.log("------------------------------");
  let product3 = await manager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "sin imagen",
    "abc123",
    25
  );
  console.log(product3);
  console.log("------------------------------");
  console.log(manager.getProductById(2));
  console.log(manager.getProductById(4));
  console.log("------------------------------");
  // console.log(manager.deleteProduct(2));
  // console.log(manager.getProducts());
  let product4 = await manager.updateProduct(
    2,
    "banana",
    1,
    "no image",
    "banana123",
    5
  );
  console.log(manager.getProducts());
};

env();
