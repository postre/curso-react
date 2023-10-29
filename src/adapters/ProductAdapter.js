export const ProductAdapter = (products) =>
  products.map((product) => ({
    id: product.id,
    title: product.title,
    brand: product.brand,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
  }));
