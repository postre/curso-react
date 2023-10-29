
import { useEffect, useState } from "react";
import ItemList from "../../ItemList/ItemList";


const ItemListContainer = ({ greetings }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=60')
            .then(res => res.json())
            .then((prods) => {
                setProducts(prods.products);
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