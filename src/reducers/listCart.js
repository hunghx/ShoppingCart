import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constants/actionTypes";
import { SHOPPING_CART } from "../constants/shoppingCart";
let initialState = [];
// Giỏ hàng (listCart) được lưu ở localStorage với tên là shoppingCart
let shoppingCart = JSON.parse(localStorage.getItem(SHOPPING_CART));
initialState =
  shoppingCart != null && shoppingCart.length > 0 ? shoppingCart : initialState;

const getIndexCart = (carts, productId) => {
  for (let index = 0; index < carts.length; index++) {
    if (carts[index].product.productId === productId) {
      return index;
    }
  }
  return -1;
};
const listCart = (state = initialState, action) => {
  switch (action.type) {
    case ACT_BUY:
      //  Mua hàng
      if (state.length == 0) {
        // Khách hàng chưa mua hàng
        let cartNew = {
          product: action.payload.product,
          quantity: action.payload.quantity,
        };
        state = [...state, cartNew];
        localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
        // localStorage.setItem("totalAmount", calTotalAmount(state));
        return state;
      } else {
        // Khách hàng đã mua hàng
        // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
        let index = getIndexCart(state, action.payload.product.productId);
        if (index === -1) {
          // Sản phẩm chưa tồn tại trong giỏ hàng
          let cartNew = {
            product: action.payload.product,
            quantity: action.payload.quantity,
          };
          state.push(cartNew);
        } else {
          // Sản phẩm đã tồn tại trong giỏ hàng
          state[index].quantity += parseInt(action.payload.quantity);
        }
        saveLocalStorage(state);
        return [...state];
      }
    case ACT_DELETE:
      let newListCart = state.filter(
        (cart) => cart.product.productId !== action.payload
      );
      saveLocalStorage(newListCart);
      return newListCart;
    case ACT_UPDATE:
      let newUpdateCart = [];
      state.forEach((item) => {
        if (item.product.productId === action.payload.productId) {
          newUpdateCart.push({ ...item, quantity: action.payload.quantity });
        } else {
          newUpdateCart.push(item);
        }
      });
      saveLocalStorage(newUpdateCart);
      return newUpdateCart;
    default:
      return state;
  }
};
const saveLocalStorage = (data) => {
  localStorage.setItem(SHOPPING_CART, JSON.stringify(data));
  //   localStorage.setItem("totalAmount", calTotalAmount(data));
};
export default listCart;
