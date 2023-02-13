import * as types from "../constants/actionTypes";
export const act_buy = (product, quantity) => {
    return {
        type: types.ACT_BUY,
        payload: { product, quantity }
    }
}
export const act_update = (productId, quantity) => {
    return {
        type: types.ACT_UPDATE,
        payload: { productId, quantity }
    }
}
export const act_delete = (productId) => {
    return {
        type: types.ACT_DELETE,
        payload: productId
    }
}
export const act_change_notify = (message) => {
    return {
        type: types.ACT_CHANGE_NOTIFY,
        payload: message
    }
}