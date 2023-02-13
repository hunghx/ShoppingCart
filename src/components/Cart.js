import React from 'react';
import { useState } from 'react';

export default function Cart(props) {
    let { cart, stt } = props;
    const [quantity, setQuantity] = useState(1);
    let quantityBuy = (cart.quantity > 0) ? cart.quantity : quantity;
    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={quantityBuy}
                    onChange={(event) => setQuantity(event.target.value)}
                    min={1}
                />
            </td>
            <td>
                <strong>{cart.product.price * cart.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
