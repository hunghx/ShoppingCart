import React from 'react';
import { useDispatch } from 'react-redux';
import { act_buy } from '../actions';
import { useState } from 'react';

export default function Product(props) {
    let { product } = props;
    const [quantity, setQuantity] = useState(1);
    let isShow = true;
    if (product.quantity == 0) {
        isShow = false;
    }
    let elementBuy = "";
    if (isShow) {
        elementBuy = <div>
            <input
                name="quantity-product-1"
                type="number"
                min={1} value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
            />
            <a data-product={1} href="#" className="price" onClick={() => dispatch(act_buy(product, quantity))}>
                {" "}
                {product.price} USD{" "}
            </a>
        </div>
    } else {
        elementBuy = <span className="price"> {product.price} USD</span>
    }
    const dispatch = useDispatch();
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img
                        className="media-object"
                        src={product.image}
                        alt={product.productName}
                    />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.productName}</h4>
                <p>
                    {product.title}
                </p>
                {elementBuy}
            </div>
        </div>
    )
}
