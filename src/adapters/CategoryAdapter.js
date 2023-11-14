import { Category } from "../models";

export class CategoryAdapter {
  static categoryAdapted(object, index) {
    return new Category(object, index);
  }

  static categoriesAdapted(objects) {
    let output = [];
    let index = 1;
    for (let object of objects) {
      if (index < 5) {
        output.push(this.categoryAdapted(object, index));
      }
      index++;
    }
    return output;
  }
}
