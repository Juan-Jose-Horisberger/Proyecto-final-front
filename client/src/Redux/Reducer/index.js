import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_DETAIL,
    FILTER_BY_DRESS,
    FILTER_BY_BRAND,
    FILTER_BY_FOOTWEAR,
    FILTER_BY_CLOTHING_SIZE,
    FILTER_BY_PRICE,
    GET_FAVORITE_PRODUCT,
    DELETE_FAV_PRODUCT
} from "../Action"

const initialState = {
    products: [],
    productDetail: {},
    productFav: []
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

        case GET_FAVORITE_PRODUCT:
            if (payload) {
                return {
                    ...state, productFav: [...state.productFav, payload[0]]
                };
            }
            
        case DELETE_FAV_PRODUCT:
            const deleteFavProduct = state.productFav.filter(e => e.id !== payload)
            return{
                ...state, productFav: deleteFavProduct
            }

        case FILTER_BY_DRESS:
            return {

            }
        case FILTER_BY_BRAND:
            return {

            }
        case FILTER_BY_FOOTWEAR:
            return {

            }
        case FILTER_BY_CLOTHING_SIZE:
            return {

            }
        case FILTER_BY_PRICE:
            return {

            }

        default:
            return state;
    }
}


