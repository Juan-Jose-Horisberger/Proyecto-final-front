import infoJson from "../../info.json"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllProducts = () => {
  return dispatch({ type: GET_ALL_PRODUCTS, payload: infoJson.hombres.camperas })
};
