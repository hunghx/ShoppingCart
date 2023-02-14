import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { act_delete, act_update } from "../actions";

export default function Cart(props) {
  const dispatch = useDispatch();
  let { cart, stt } = props;
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (cart.quantity > 0) {
      setQuantity(cart.quantity);
    }
  }, [cart.quantity]);
  const handleDelete = (idDel) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá sp này chứ ?")) {
      dispatch(act_delete(idDel));
    }
  };
  const handleUpdate = (idUpdate) => {
    dispatch(act_update(idUpdate, quantity));
  };
  return (
    <tr>
      <th scope="row">{stt}</th>
      <td>{cart.product.productName}</td>
      <td>{cart.product.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(+event.target.value)}
          min={1}
        />
      </td>
      <td>
        <strong>{cart.product.price * quantity} USD</strong>
      </td>
      <td>
        <button
          onClick={() => handleUpdate(cart.product.productId)}
          className="label label-info update-cart-item"
          data-product=""
        >
          Update
        </button>
        <button
          className="label label-danger delete-cart-item"
          data-product=""
          onClick={() => handleDelete(cart.product.productId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
