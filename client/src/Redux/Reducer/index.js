import { GET_ALL_PRODUCTS } from "../Action"

const initialState = {
    products: []
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: payload
            }
        default:
            return state
    }

}