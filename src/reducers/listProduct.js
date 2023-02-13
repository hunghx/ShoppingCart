const initialState = [
    { productId: "P001", productName: "Pizza", image: "images/pizza.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", price: 12, quantity: 10 },
    { productId: "P002", productName: "Hamburger", image: "images/Hamburger.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", price: 16, quantity: 0 },
    { productId: "P003", productName: "Bread", image: "images/bread.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", price: 13, quantity: 8 },
    { productId: "P004", productName: "Cake", image: "images/Cake.jpg", title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!", price: 14, quantity: 6 }
];
const listProduct = (state = initialState, action) => {
    return state;
}
export default listProduct;