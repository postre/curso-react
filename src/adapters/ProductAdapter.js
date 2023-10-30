import {Product} from "../models/Product";

export class ProductAdapter {
  static productAdapted(product) {
    return new Product(product);
  }

  static productsAdapted(products) {
    return products.products.map(product => this.productAdapted(product));
  }
}




