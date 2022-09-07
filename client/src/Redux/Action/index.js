import infoJson from "../../info.json";
// import infoUserJson from "../../infoUser.json";
import axios from "axios";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_FAVORITE_PRODUCT = "GET_FAVORITE_PRODUCT";
export const DELETE_FAV_PRODUCT = "DELETE_FAV_PRODUCT";
export const GET_CART_PRODUCT = "GET_CART_PRODUCT";
export const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT";
export const PRODUCT_TO_BUY = "BUY_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_QUERY = "FILTER_BY_QUERY";
export const SET_NOTIFICATIONS_TO_0 = "SET_NOTIFICATIONS_TO_0";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";
export const GET_USERS = "GET_USERS";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const CREATE_USER = "CREATE_USER";
export const SET_DETAIL_NOTIFICATIONS = "SET_DETAIL_NOTIFICATIONS";
export const UPDATE_USER_DETAIL = "UPDATE_USER_DETAIL";
export const GET_USER_DASHBOARD = "GET_USER_DASHBOARD";

export const getAllProducts = () => {
  return async function (dispatch) {
    let products = await axios.get("/products");
    return dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.data,
    });
  };
};

export const getProductDetail = (id) => {
  if (id) {
    return async function (dispatch) {
      let productDetail = await axios.get(`/products/${id}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail.data,
      });
    };
  } else {
    return {
      type: GET_PRODUCT_DETAIL,
    };
  }
};

export const getProductByName = (name) => {
  if (name) {
    return async function (dispatch) {
      let products = await axios.get("/products");
      const productDetail = await products.data.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: productDetail,
      });
    };
  }
};

export const getFavoriteProduct = (id) => {
  return async function (dispatch) {
    let favoriteProduct = await axios.get(`/products/${id}`);
    return dispatch({
      type: GET_FAVORITE_PRODUCT,
      payload: favoriteProduct.data,
    });
  };
};

export const deleteFavProduct = (id) => {
  return {
    type: DELETE_FAV_PRODUCT,
    payload: id,
  };
};

export const getCartProduct = (id) => {
  return async function (dispatch) {
    let cartProduct = await axios.get(`/products/${id}`);
    return dispatch({
      type: GET_CART_PRODUCT,
      payload: cartProduct.data,
    });
  };
};

export const deleteCartProduct = (id) => {
  return {
    type: DELETE_CART_PRODUCT,
    payload: id,
  };
};

export const getProductToBuy = (id) => {
  if (id) {
    return async function (dispatch) {
      let productToBuy = await axios.get(`/products/${id}`);
      // console.log(productToBuy.data);
      return dispatch({
        type: PRODUCT_TO_BUY,
        payload: productToBuy.data,
      });
    };
  }
  return {
    type: PRODUCT_TO_BUY,
  };
};

export const createProduct = (payload) => {
  return async function (dispatch) {
    let newProduct = await axios.post(`/products`, payload);
    return dispatch({
      type: CREATE_PRODUCT,
      payload,
    });
  };
};

export const EditProduct = (id, data) => {
  return async function (dispatch) {
    let editedProduct = await axios.put(`/products/change/${id}`, data);
    return dispatch({
      type: EDIT_PRODUCT,
      // payload: editedProduct,
    });
  };
};

export const deleteProduct = (id) => {
  return async function (dispatch) {
    let editedProduct = await axios.delete(`/products/delete/${id}`);
    return dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };
};

export const filterByQuery = (params) => {
  return async function (dispatch) {
    let filterProducts = await axios.get(`/products?${params}`);
    return dispatch({
      type: FILTER_BY_QUERY,
      payload: filterProducts.data,
    });
  };
};

export const filterByPrice = (price) => {
  return {
    type: FILTER_BY_PRICE,
    payload: price,
  };
};

export const clearNotifications = () => {
  return {
    type: SET_NOTIFICATIONS_TO_0,
  };
};

export const sendInformation = (payload) => {
  return {
    type: SET_NOTIFICATIONS,
    payload,
  };
};

export function getUsers() {
  return async function call(dispatch) {
    let allUsers = await axios.get("/users");
    return dispatch({ type: GET_USERS, payload: allUsers.data });
  };
}
export function banUser(id) {
  return async function call(dispatch) {
    let allUsers = await axios.put(`/users/ban/${id}`);
  };
}

export const getUserDetail = (email) => {
  return async function (dispatch) {
    let userDetail = await axios.get(`/users/${email}`);
    return dispatch({ type: GET_USER_DETAIL, payload: userDetail.data });
  };
};

export const createUser = (payload) => {
  const user = {
    given_name: payload.given_name,
    family_name: payload.family_name,
    nickname: payload.nickname,
    email: payload.email,
    picture: payload.picture,
  };

  return async function (dispatch) {
    let NewUser = await axios.post(
      `https://proyecto-final-01.herokuapp.com/users/post`,
      // 'http://localhost:3001/users/post',
      user
    );
    return dispatch({ type: CREATE_USER, payload: NewUser.data });
  };
};

export const getDetailNotification = (payload) => {
  return {
    type: SET_DETAIL_NOTIFICATIONS,
    payload,
  };
};

export const updateUserDetail = (id, data) => {
  return async function (dispatch) {
    let updateUser = await axios.put(`/users/update/${id}`, data);
  };
};

export const getUserNameInDashboard = (payload) => {
  return {
    type: GET_USER_DASHBOARD,
    payload,
  };
};
