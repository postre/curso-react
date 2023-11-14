import {Product} from "../models";

export class ProductAdapter {
  static productAdapted(product) {
    return new Product(product);
  }

  static productsAdapted(products) {
    return products.map(product => this.productAdapted(product));
  }
}




