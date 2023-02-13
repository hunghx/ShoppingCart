import { ACT_BUY } from "../constants/actionTypes";
import { SHOPPING_CART } from "../constants/shoppingCart";
let initialState = [];
// Giỏ hàng (listCart) được lưu ở localStorage với tên là shoppingCart
let shoppingCart = JSON.parse(localStorage.getItem(SHOPPING_CART));
initialState = (shoppingCart != null && shoppingCart.length > 0) ? shoppingCart : initialState;
const calTotalAmount = (carts) => {
    let totalAmount = 0;
    carts.forEach(cart => {
        totalAmount += cart.quantity * cart.product.price;
    });
    return totalAmount;
}
const getIndexCart = (carts, productId) => {
    for (let index = 0; index < carts.length; index++) {
        if (carts[index].product.productId === productId) {
            return index;
        }
    }
    return -1;
}
const listCart = (state = initialState, action) => {
    switch (action.type) {
        case ACT_BUY:
            //  Mua hàng
            if (state.length == 0) {
                // Khách hàng chưa mua hàng
                let cartNew = { product: action.payload.product, quantity: action.payload.quantity };
                state = [...state, cartNew];
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
                localStorage.setItem("totalAmount", calTotalAmount(state));
                return state;
            } else {
                // Khách hàng đã mua hàng
                // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
                let index = getIndexCart(state, action.payload.product.productId);
                if (index === -1) {
                    // Sản phẩm chưa tồn tại trong giỏ hàng
                    let cartNew = { product: action.payload.product, quantity: action.payload.quantity };
                    state.push(cartNew);
                } else {
                    // Sản phẩm đã tồn tại trong giỏ hàng
                    state[index].quantity += parseInt(action.payload.quantity);
                }
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
                localStorage.setItem("totalAmount", calTotalAmount(state));
                return [...state];
            }

            return state;
        default:
            return state;
    }
}
export default listCart;