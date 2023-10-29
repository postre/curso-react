
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../services";

const ItemListContainer = ({ greetings }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((products) => {
            // console.log(products)
            setProducts(products);
        });            
    }, []);


    return (
        <>

            <div className="container mb-5">
                <h3 className="mt-4">{greetings}</h3>
                <div className="row cart">
                    {products.map(product =>
                        <ItemList product={product} key={product.id}/>
                    )}
                </div>
            </div>
            </>
            )
}

            export default ItemListContainer