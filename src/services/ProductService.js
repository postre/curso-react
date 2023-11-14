export const getProducts = (categoryId) => { 
    let url = (!categoryId) ? "https://dummyjson.com/products"  : `https://dummyjson.com/products/category/${categoryId}`;
    return fetch(url)
  .then((response) => response.json())
  .then((response) => response.products)
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return "error";
    }
    
  });
}
