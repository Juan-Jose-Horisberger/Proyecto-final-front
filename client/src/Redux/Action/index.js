import infoJson from "../../info.json"
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllDiets = () => {
  return dispatch({ type: GET_ALL_PRODUCTS, payload: infoJson.hombres.camperas })
};
