export const getCategories = () => { 
    let url = "https://dummyjson.com/products/categories";
    return fetch(url)
  .then((response) => response.json())
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      return "error";
    }
    
  });
}
