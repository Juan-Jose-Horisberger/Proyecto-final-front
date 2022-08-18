import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_DETAIL,
    FILTER_BY_CATEGORY,
} from "../Action"

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

        case GET_PRODUCT_BY_NAME:
            return {
                ...state, products: payload
            };
        case FILTER_BY_CATEGORY:
                

        default:
            return state
    }

}