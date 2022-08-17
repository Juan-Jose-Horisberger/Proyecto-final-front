import infoJson from "../../info.json"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";

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
      alert("No se encontro ese id")
      return;
    }

  }
  else{
    alert("No hay id !!!!!!!!!")
  }
};

export const getProductByName = (name) => {

  if (name) {
    const productDetail = infoJson.hombres.camperas.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
    // console.log(productDetail);
    if(productDetail.length){
      return ({
        type: GET_PRODUCT_BY_NAME,
        payload: productDetail
      })
    }
    else{
      alert("No se encontro una prenda con ese nombre")
      return;
    }

  }
  else{
    alert("No hay nombre !!!!!!!!!")
  }
};
