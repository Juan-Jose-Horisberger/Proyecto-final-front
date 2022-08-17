import { GET_ALL_PRODUCTS } from "../Action"

const initialState = {
    products: [],
    productDetail: {}
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: payload
            };

        case GET_PRODUCT_DETAIL:
            return {
                ...state, productDetail: payload
            };
        default:
            return state
    }

}