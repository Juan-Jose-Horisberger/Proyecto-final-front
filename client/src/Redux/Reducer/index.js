import Cookies from "universal-cookie"
import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_DETAIL,
    GET_FAVORITE_PRODUCT,
    DELETE_FAV_PRODUCT,
    GET_CART_PRODUCT,
    DELETE_CART_PRODUCT,
    BUY_PRODUCT,
    CREATE_PRODUCT,
    FILTER_BY_QUERY,
    FILTER_BY_PRICE,
    SET_NOTIFICATIONS_TO_0,
    SET_NOTIFICATIONS,
    GET_USERS,
    GET_USER_DETAIL,
    CREATE_USER
} from "../Action"
var cookies = new Cookies();
const initialState = {
    products: [],
    allProducts: [],
    productDetail: {},
    productFav: [],
    productCart: [],
    newNotification: {
        counter: 0,
        purchaseNotification: []
    },
    productsToBuy: [],


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
            } else {
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
                var expiryDate = new Date(Date.now() + (100 * 24 * 3600000));
                cookies.set(payload.id, payload, { path: "/", expires: expiryDate });
                return {
                    ...state, productCart: [...state.productCart, payload]
                };
            };

        case DELETE_CART_PRODUCT:
            const deleteCartProduct = state.productCart.filter(e => e.id !== payload)
            return {
                ...state, productCart: deleteCartProduct
            };

        case BUY_PRODUCT:
            if (payload) {
                const productsBuy = cookies.get(payload)
                console.log(productsBuy)
                return {
                    ...state, productsToBuy: [productsBuy]
                }
            } else {
                return {
                    ...state, productsToBuy: false
                }
            };

        case CREATE_PRODUCT:
            console.log(payload)
            return {
                ...state, products: [...state.products, payload],
                notification: state.notification + 1,
                newNotification: {
                    counter: state.newNotification.counter + 1,
                    newProducts: [...state.newNotification.newProducts, payload]
                }
            };

        case FILTER_BY_QUERY:
            return {
                ...state, products: payload, allProducts: payload
            };

        case FILTER_BY_PRICE:
            return {
                ...state, products: state.allProducts.filter(e => e.price <= payload)
            };

        case SET_NOTIFICATIONS_TO_0:
            return {
                ...state,
                newNotification: {
                    ...state,
                    purchaseNotification: [...state.newNotification.purchaseNotification],
                    counter: 0
                }
            };

        case SET_NOTIFICATIONS:
            console.log(payload);
            return {
                ...state, newNotification: {
                    counter: state.newNotification.counter + 1,
                    purchaseNotification: [...state.newNotification.purchaseNotification, payload],
                }
            };

        case GET_USERS:
            return {
                ...state,
                allUsers: payload
            };

        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: payload
            };

        case CREATE_USER:
            return {
                ...state,
                newUsers: [...state.allUsers, payload]
            };

        default:
            return state;
    }
}

