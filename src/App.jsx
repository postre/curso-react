import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Error404, Home, Layout, Products } from "./pages";
import { CartListContainer, ItemListContainer, Slider } from "./components";
import { CartProvider, ProductProvider } from "./providers";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/category/:categoryId" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter> */}

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout><Slider /><ItemListContainer /></Layout>} />
              <Route path="/products" element={<Layout><ItemListContainer /></Layout>} />
              <Route path="/products/category/:categoryId" element={<Layout><ItemListContainer /></Layout>} />
              <Route path="/cart" element={<Layout><CartListContainer /></Layout>} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
          </CartProvider>
        </ProductProvider>
    </>
  );
}

export default App;
