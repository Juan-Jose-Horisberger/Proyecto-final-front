import infoJson from "../../info.json"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const FILTER_BY_DRESS ="FILTER_BY_DRESS";
export const FILTER_BY_BRAND ="FILTER_BY_BRAND";
export const FILTER_BY_FOOTWEAR = "FILTER_BY_FOOTWEAR";
export const FILTER_BY_CLOTHING_SIZE = "FILTER_BY_CLOTHING_SIZE";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";


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

export const filterByDress = (payload)=> {
  return{
    type:'FILTER_BY_DRESS',
    payload
  }
}
export const filterByBrand = (payload)=> {
  return{
    type: 'FILTER_BY_BRAND',
    payload
  }
}
export const filterByFootwear  = (payload)=> {
  return{
    type: 'FILTER_BY_FOOTWEAR',
    payload
  }
}
export const filterByClothingSize = (payload)=> {
  return{
    type: 'FILTER_BY_CLOTHING_SIZE',
    payload
  }
}

export const filterByPrice = (payload)=> {
  return{
    type: 'FILTER_BY_PRICE',
    payload
  }
}
export function filterByGenre(payload){
  return {
  type: 'FILTER_BY_GENRE',
  payload
  }
  }
  