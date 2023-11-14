import { useContext } from "react";
import { Footer, Loader, NavBar } from "../components";
import { ProductContext } from "../context";

export const Layout = ({ children }) => {

  const { fadeProp } = useContext(ProductContext);
  
  return (
    <>
      <NavBar />
      <Loader fade={fadeProp.fade} />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
};
