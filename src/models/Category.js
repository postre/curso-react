import { StringHelpers } from "../Helpers/StringHelpers"

export class Category {
  constructor(object,index) {
    this.id = index
    this.title = StringHelpers.title(object)
    this.slug = object
  }
}
