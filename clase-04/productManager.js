import fs from "fs";

export default class ProductManager {
  constructor() {
    this.products = [];
    this.path = "files/productManager.json";
  }
  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);
      console.log(result);
      return result;
    } else {
      return [];
    }
  };
  addProduct = async (title, description, price, thumbnail, code, stock) => {
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
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, "\t")
      );
      return product;
    } else {
      console.error(`Product with code : "${code}" already exists.`);
      return null;
    }
  };
  #codeIndex = (code) => {
    const codeIndex = this.products.findIndex(
      (product) => product.code === code
    );
    return codeIndex;
  };
  findProduct = async (productId) => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);

      const productIndex = result.findIndex(
        (product) => product.id === productId
      );
      if (productIndex === -1) {
        console.error(`The Product with ID : "${productId}" does not exist.`);
        return false;
      } else {
        return productIndex;
      }
    }
  };
  getProductById = async (productId) => {
    const search = await this.findProduct(productId);
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);

      return console.log(result[search]);
    }
  };
  deleteProduct = async (productId) => {
    const search = await this.findProduct(productId);
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);

      result.splice(search, 1);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(result, null, "\t")
      );
      return;
    }
  };
  updateProduct = async (id, description, price, thumbnail, code, stock) => {
    const search = await this.findProduct(id);
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const result = JSON.parse(data);
      const producto = {
        description: description ?? result[search].description,
        price: price ?? result[search].price,
        thumbnail: thumbnail ?? result[search].thumbnail,
        code: code ?? result[search].code,
        stock: stock ?? result[search].stock,
        id: id,
      };
      result[search] = producto;
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(result, null, "\t")
      );
      return;
    } else {
      return console.error(`The product with id: ${id} does not exist.`);
    }
  };
}
