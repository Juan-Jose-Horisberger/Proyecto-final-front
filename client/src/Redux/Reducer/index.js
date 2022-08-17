const initialState = {
    products: []
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state, products: payload
            }
        default:
            return state
    }

}