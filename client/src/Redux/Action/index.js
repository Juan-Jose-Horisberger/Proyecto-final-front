import infoJson from "../../info.json"
import axios from "axios"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_FAVORITE_PRODUCT = "GET_FAVORITE_PRODUCT";
export const DELETE_FAV_PRODUCT = "DELETE_FAV_PRODUCT";
export const GET_CART_PRODUCT = "GET_CART_PRODUCT";
export const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const FILTER_CATEGORY = "FILTER_CATEGORY";
export const FILTER_BY_CLOTHING_SIZE = "FILTER_BY_CLOTHING_SIZE";
export const FILTER_GENRES = "FILTER_GENRES";

export const getAllProducts = () => {
  return async function (dispatch) {
    let products = await axios.get("https://proyecto-final-01.herokuapp.com/products")
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data
    })
  }
};

export const getProductDetail = (id) => {
  if (id) {
    return async function (dispatch) {
      let productDetail = await axios.get(`https://proyecto-final-01.herokuapp.com/products/${id}`)
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data
      })
    }
  }else {
    return ({
      type: GET_PRODUCT_DETAIL,
    })
  }
};

export const getProductByName = (name) => {
  if (name) {
    return async function (dispatch) {
      let products = await axios.get("https://proyecto-final-01.herokuapp.com/products")
      const productDetail = await products.data.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: productDetail
      })
    }
  }
};

export const getFavoriteProduct = (id) => {
  return async function (dispatch) {
    let favoriteProduct = await axios.get(`https://proyecto-final-01.herokuapp.com/products/${id}`)
    return dispatch({
      type: GET_FAVORITE_PRODUCT,
      payload: favoriteProduct.data
    })
  }
};

export const deleteFavProduct = (id) => {
  return ({
    type: DELETE_FAV_PRODUCT,
    payload: id
  })
};

export const getCartProduct = (id) => {
  return async function (dispatch) {
    let cartProduct = await axios.get(`https://proyecto-final-01.herokuapp.com/products/${id}`)
    return dispatch({
      type: GET_CART_PRODUCT,
      payload: cartProduct.data
    })
  }
};

export const deleteCartProduct = (id) => {
  return ({
    type: DELETE_CART_PRODUCT,
    payload: id
  })
};

export const createProduct = (data) => {
  return async function () {
    let newProduct = await axios.post(`"https://proyecto-final-01.herokuapp.com/products`, data)
    return ({
      type: CREATE_PRODUCT,
      payload: newProduct
    });
  }
}

export const categoryFilter = (calzado) => {
  return async function (dispatch) {
    let category = await axios.get("https://proyecto-final-01.herokuapp.com/products/category/" + calzado)
    return dispatch({
      type: FILTER_CATEGORY,
      payload: category.data
    })
  }
};

export const genresFilter = (hombre) => {
  return async function (dispatch) {
    const infoFilter = await axios.get("https://proyecto-final-01.herokuapp.com/products/genres/" + hombre)
    console.log(infoFilter)
    return dispatch({
      type: FILTER_GENRES,
      payload: infoFilter.data
    })
  }
};

export const brandFilter = (brand) => {
  return async function (dispatch) {
    const infoBrand = await axios.get("https://proyecto-final-01.herokuapp.com/products/brand/" + brand)
    console.log(infoBrand)
    return dispatch({
      type: FILTER_BY_BRAND,
      payload: infoBrand.data
    })
  }
};

export const sizeClothingFilter = (m) => {
  return async function (dispatch) {
    let sizeClothing = await axios.get("https://proyecto-final-01.herokuapp.com/products/size/" + m)
    return dispatch({
      type: FILTER_BY_CLOTHING_SIZE,
      payload: sizeClothing.data
    })
  }
};


