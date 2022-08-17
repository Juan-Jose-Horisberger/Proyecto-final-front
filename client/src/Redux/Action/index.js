import infoJson from "../../info.json"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

export const getAllProducts = () => {
  return dispatch({ type: GET_ALL_PRODUCTS, payload: infoJson.hombres.camperas })
};

export const getProductDetail = () => {
  return dispatch({ type: GET_PRODUCT_DETAIL, payload: infoJson.hombres.camperas })
};
