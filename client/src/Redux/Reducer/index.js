import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_DETAIL,
    GET_FAVORITE_PRODUCT,
    DELETE_FAV_PRODUCT,
    GET_CART_PRODUCT,
    DELETE_CART_PRODUCT,
    CREATE_PRODUCT,
    FILTER_BY_BRAND,
    FILTER_CATEGORY,
    FILTER_BY_CLOTHING_SIZE,
    FILTER_GENRES,

} from "../Action"

const initialState = {
    products: [],
    productDetail: {},
    productFav: [],
    productCart: [],


}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: payload,
                allProducts: payload
            };

        case GET_PRODUCT_DETAIL:
            if (payload) {
                return {
                    ...state, productDetail: payload
                };
            }else {
                return {
                    ...state, productDetail: {}
                };
            }

        case GET_PRODUCT_BY_NAME:
            return {
                ...state, products: payload
            };

        case GET_FAVORITE_PRODUCT:
            if (payload) {
                return {
                    ...state, productFav: [...state.productFav, payload]
                };
            };

        case DELETE_FAV_PRODUCT:
            const deleteFavProduct = state.productFav.filter(e => e.id !== payload)
            return {
                ...state, productFav: deleteFavProduct
            };

        case GET_CART_PRODUCT:
            if (payload) {
                return {
                    ...state, productCart: [...state.productCart, payload]
                };
            };

        case DELETE_CART_PRODUCT:
            const deleteCartProduct = state.productCart.filter(e => e.id !== payload)
            return {
                ...state, productCart: deleteCartProduct
            };

        case CREATE_PRODUCT:
            return {
                ...state, products: [...state.products, payload]
            };

        case FILTER_GENRES:
            return {
                ...state, products: payload
            };

        case FILTER_BY_BRAND:
            return {
                ...state, products: payload
            };
        case FILTER_CATEGORY:
            return {
                ...state, products: payload
            };
        case FILTER_BY_CLOTHING_SIZE:
            return {
                ...state, products: payload
            };

        default:
            return state;
    }
}

