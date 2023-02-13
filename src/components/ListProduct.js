import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

export default function ListProduct() {
    const listProduct = useSelector(state => state.listProduct);
    let elementListProduct = listProduct.map(product => {
        return <Product key={product.productId} product={product} />
    })
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                    {/* PRODUCT : START */}
                    {elementListProduct}
                    {/* PRODUCT : END */}
                </div>
            </div>
        </div>
    )
}
