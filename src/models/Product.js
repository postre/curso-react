import { StringHelpers } from "../helpers";

export class Product {
  constructor(product) {
    this.id = product.id,
    this.title = product.title,
    this.brand = product.brand,
    this.description = product.description,
    this.price = product.price,
    this.thumbnail = product.thumbnail;
    this.category = StringHelpers.title(product.category);
  }
}
