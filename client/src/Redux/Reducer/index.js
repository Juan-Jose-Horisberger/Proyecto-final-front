const initialState = {
    products: {}
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch (type) {
        case '...':
            return {
                ...state,
            }
        default:
            return state
    }

}