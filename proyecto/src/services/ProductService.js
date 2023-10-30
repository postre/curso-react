export const getProducts = (categoryId) => { 
    let url = (!categoryId) ? "https://dummyjson.com/products?limit=30"  : `https://dummyjson.com/products/category/${categoryId}`;
    return fetch(url)
  .then((response) => response.json())
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return "error";
    }
    
  });
}
