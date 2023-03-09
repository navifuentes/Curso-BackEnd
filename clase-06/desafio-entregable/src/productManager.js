import fs from "fs";

export default class ProductManager {
  constructor() {
    this.products = [];
    this.path = "files/productManager.json";
  }
  getProducts = async () => {
    try {
      if (fs.existsSync(this.path)) {
        const data = await fs.promises.readFile(this.path, "utf-8");
        const result = JSON.parse(data);
        return result;
      } else {
        return [];
      }
    } catch (error) {
      console.error(`File ${this.path} not found : ${error}`);
    }
  };
  addProduct = async (title, description, price, thumbnail, code, stock) => {
    try {
      const products = await this.getProducts();
      if ((!title, !description, !price, !thumbnail, !code, !stock)) {
        console.error("Please complete all product fields.");
        return;
      } else {
        if (this.#codeIndex(products, code) === -1) {
          const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: products.length + 1,
          };
          products.push(product);
          await fs.promises.writeFile(
            this.path,
            JSON.stringify(products, null, "\t")
          );
          return products;
        }
      }
    } catch (error) {
      console.error(`Product with code : "${code}" already exists`);
    }
  };
  #codeIndex = (array, code) => {
    const codeIndex = array.findIndex((product) => product.code === code);
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
        return productIndex;
      } else {
        return productIndex;
      }
    }
  };
  getProductById = async (productId) => {
    try {
      const search = await this.findProduct(productId);
      const products = await this.getProducts();
      return products[search];
    } catch (error) {
      console.log(error);
    }
  };
  deleteProduct = async (productId) => {
    const search = await this.findProduct(productId);
    const products = await this.getProducts();

    if (search === -1) {
      return;
    } else {
      try {
        products.splice(search, 1);
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(products, null, "\t")
        );
        return console.log("Product deleted successfully !");
      } catch (error) {
        console.log(error);
      }
    }
  };

  updateProduct = async (
    id,
    title,
    description,
    price,
    thumbnail,
    code,
    stock
  ) => {
    try {
      const search = await this.findProduct(id);
      const products = await this.getProducts();
      const product = {
        title: title ?? result[search].title,
        description: description ?? result[search].description,
        price: price ?? result[search].price,
        thumbnail: thumbnail ?? result[search].thumbnail,
        code: code ?? result[search].code,
        stock: stock ?? result[search].stock,
        id: id,
      };
      products[search] = product;
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(products, null, "\t")
      );
      return console.log("Product updated successfully !");
    } catch (error) {
      console.log(error);
    }
  };
}
