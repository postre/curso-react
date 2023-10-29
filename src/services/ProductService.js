import { ProductAdapter } from "../adapters";

export const getProducts = fetch('https://dummyjson.com/products?limit=30')
    .then(response => response.json())
    .then(response => ProductAdapter(response.products))
    .catch(error => {
        if (error.response && error.response.status === 404) {
            return "error";
        }
    });
