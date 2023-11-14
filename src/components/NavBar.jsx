import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { CategoryAdapter } from "../adapters";
import { getCategories } from "../services";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(CategoryAdapter.categoriesAdapted(categories));
    });
  }, []);

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0 me-4 text-white text-decoration-none"
            >
              <img
                src="/src/assets/img/react.svg"
                className="animated-logo"
                width="30"
              />
              <span className="mx-2 fw-bold">React Store</span>
              <img
                src="/src/assets/img/react.svg"
                className="animated-logo"
                width="30"
              />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link
                to={"/products"}
                className="d-flex align-items-center mb-2 mb-lg-0 me-4 text-white text-decoration-none"
              >
                Todos
              </Link>

              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/products/category/${category.slug}`}
                    className="nav-link px-2 me-4 text-white"
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="text-end">
              <CartWidget />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
