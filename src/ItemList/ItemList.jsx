import {moneyFormat} from "../Utils/NumberUtils.js";

const ItemList = ({ product }) => {
    return (
        <>
            <div className="col-md-4 d-flex align-items-stretch">
                <div className="card mt-4 card-product" >
                    <img src={product.thumbnail} className="img-fluid product-img" />

                    <div className="card-body border-top">
                        <h5 className="card-title">{product.title}</h5>
                        <p>{product.brand}</p>
                        <p className="card-text">{product.description}</p>

                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-6">
                                <h4>{moneyFormat(product.price)}</h4>
                            </div>
                            <div className="col-6 text-end ">
                                <button className="btn btn-primary">
                                    <i className="fas fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemList