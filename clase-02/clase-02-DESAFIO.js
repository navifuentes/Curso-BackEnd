class ProductManager {
  constructor() {
    this.products = [];
  }
  getProducts = () => {
    console.log(this.products);
    return;
  };
  addProduct = (title, description, price, thumbnail, code, stock) => {
    if (this.#codeIndex(code) === -1) {
      const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.products.length + 1,
      };
      this.products.push(product);
    } else {
      console.error(`Product with code : "${code}" already exists.`);
    }
  };
  #codeIndex = (code) => {
    const codeIndex = this.products.findIndex(
      (product) => product.code === code
    );
    return codeIndex;
  };
  getProductById = (productId) => {
    const findProductId = this.products.findIndex(
      (product) => product.id === productId
    );
    if (findProductId === -1) {
      console.error(`The Product with ID : "${productId}" does not exist.`);
    } else {
      console.log(this.products[findProductId]);
    }
  };
}

// EJECUCION

const instancia1 = new ProductManager();
instancia1.getProducts();
console.log("-----------");
instancia1.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
instancia1.getProducts();
console.log("-----------");
instancia1.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
instancia1.getProducts();
console.log("-----------");
instancia1.addProduct(
  "manzana",
  "es una fruta",
  100,
  "sin imagen",
  "mza123",
  300
);
instancia1.getProducts();
console.log("-----------");
instancia1.getProductById(2);
instancia1.getProductById(4);
