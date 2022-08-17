import infoJson from "../../info.json"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

export const getAllProducts = () => {
  return ({
    type: GET_ALL_PRODUCTS,
    payload: infoJson.hombres.camperas
  })
};

export const getProductDetail = (id) => {

  if (id) {
    const productDetail = infoJson.hombres.camperas.filter(e => e.id === parseInt(id))
    console.log(productDetail);
    if(productDetail.length){
      return ({
        type: GET_PRODUCT_DETAIL,
        payload: productDetail
      })
    }
    else{
      alert("No te desubiques")
      return;
    }

  }
  else{
    alert("No hay id !!!!!!!!!")
  }
};
