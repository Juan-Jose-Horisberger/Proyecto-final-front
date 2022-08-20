import {
    GET_ALL_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_DETAIL,
    FILTER_BY_BRAND,
    FILTER_BY_FOOTWEAR,
    FILTER_BY_CLOTHING_SIZE,
    FILTER_BY_PRICE,
    GET_FAVORITE_PRODUCT,
    DELETE_FAV_PRODUCT,
    FILTER_BY_GENRE,
    FILTER_BY_CATEGORY,
} from "../Action"

const initialState = {
    products: [],
    productDetail: {},
    productFav: [],
    allProducts: [],
}

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state, products: payload,
                 allProducts:payload
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

        //falta corregir
        case FILTER_BY_CATEGORY:
            const productsCategory = state.allProducts
            const categoryFilter= payload === 'All' ? productsCategory : productsCategory.filter(el => el.marca ===  payload)
            console.log(categoryFilter)
                return{
               ...state,
                products : categoryFilter
              }       

        //funciona!!    
        case FILTER_BY_BRAND:
         const productsBrand = state.allProducts
         const brandFilter= payload === 'All' ? productsBrand : productsBrand.filter(el => el.marca ===  payload)
         console.log(brandFilter)
            return{
              ...state,
                products : brandFilter
            }
            
       /* case FILTER_BY_FOOTWEAR:
          const productsFootwear = state.allProducts
          const footwearFilter= payload === 'All' ? productsFootwear: productsFootwear.map(el => el.talle === payload)
            console.log(footwearFilter)
        return{
            ...state,
            products : footwearFilter
            }*/
       /* case FILTER_BY_CLOTHING_SIZE:
            const size = state.allProducts
            const sizeFilter= payload === 'All' ? size: size.filter(el => el.talle === payload)
             console.log(sizeFilter)
              return{
                  ...state,
                  products : sizeFilter
                  }*/
            
          case FILTER_BY_PRICE:
              return{ 
             } 

        case  FILTER_BY_GENRE:
        const productsAll = state.allProducts
        const genreFilter= payload === 'All' ? productsAll : productsAll.filter(el => el.genero ===  payload)
            console.log(genreFilter)
        return{
            ...state,
            products : genreFilter
            }
               

        default:
            return state;
    }
}

