import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import infoJson from "../../info.json"
import style from "./FormProduct.module.css"
import unaX from "../../Imagenes/unaX.svg"

const initialForm = {
  name: "",
  brand: "",
  category: "",
  price: 0,
  stock: 0,
  image: "",
  sold: 0,
  size: [],
  score: 0,
  genre: ""
}

const validateForm = (form, value) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regExpUrl = /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|jpeg|png)/i;

  if (!form.name.trim() && value === "name") {
    errors.name = "El nombre del producto es requerido"
  } else if (!regexName.test(form.name.trim()) && value === "name") {
    errors.name = "El nombre del producto solo acepta letras y espacios."
  };

  if (!form.size.length && value === "M" || value === "S" || value === "XS" || value === "L") {
    errors.size = "Debes seleccionar minimo 1 talle"
  }

  if (form.price > 150000) {
    errors.price = "El precio excede el maximo permitido"
  } else if (form.price < 0) {
    errors.price = "El precio no puede ser menor a 0"
  }

  if (form.brand === "" && value === "brand") {
    errors.brand = "Debes seleccionar una marca"
  };

  if (form.category === "" && value === "category") {
    errors.category = "Debes seleccionar una categoria"
  };

  if (form.genre === "" && value === "genre") {
    errors.genre = "El producto debe pertener a un genero"
  };

  if (value === "image") {
    if (form.image === "") {
      errors.image = "El producto necesita una imagen"
    }
    // else if (!regExpUrl.test(form.image)) {
    //   errors.image = "La direccion de imagen debe ser en formato jpg, jpeg o png"
    // }
    errors.showImage = "limpio"
  }

  return errors;
}


export default function FormProduct() {
  const {
    form,
    setForm,
    errors,
    button,
    handleOnChange,
    handleSubmit,
    handleChecked,
    handleOnBlur,
    handleOnButton
  } = useForm(initialForm, validateForm)


  return (
    <div className={style.containerPrincipal}>
      <Link to="/" className={style.link}>
        {/* <img src={unaX} alt="" /> */}
        <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
      </Link>
      <h2>Agrega un producto al catalogo</h2>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text"
              name="name"
              id="name"
              value={form.name}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>

          <div className={style.catbrand}>
            <label htmlFor="category">Categoria</label>
            <select name="category" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option style={{ display: "none" }} >Category</option>
              <option value="calzado" >Calzado</option>
              <option value="camiseta" >Camiseta</option>
              <option value="pantalon" >Pantalon</option>
              <option value="buzo" >Buzo</option>
              <option value="campera" >Campera</option>
            </select>

            <label htmlFor="brand">Marca</label>
            <select name="brand" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option style={{ display: "none" }} >Brand</option>
              <option value="Adidas" >Adidas</option>
              <option value="Nike" >Nike</option>
              <option value="Puma" >Puma</option>
            </select>

            {errors.category && <p className={style.error}>{errors.category}</p>}
            {errors.brand && <p className={style.error}>{errors.brand}</p>}
          </div>

          <button type="button"
            className="btn btn-primary"
            onClick={handleOnButton} > {button} </button>
          {/* <button type="button" class="btn btn-primary m-2">Info</button> */}
          <div className={style.divImage}>
            {button === "URL" ?

              <div><label htmlFor="image">Imagen</label>
                <input type="text"
                  // type="file"
                  name="image"
                  id="image"
                  value={form.image}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                /> </div>

              :

              <div>
                <label htmlFor="image" cl>Imagen</label>
                <input type="file"
                  className={style.inputFile}
                  name="image"
                  id="image"
                  value={form.image}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  accept="image/*"
                /> </div>}
            {errors.image && <p className={style.error}>{errors.image}</p>}
          </div>

          {errors.showImage &&
            <div>
              <img src="jaj.png" alt="Image not found" className={style.imagen} />
            </div>}

          <div className={style.divPrice}>
            <label htmlFor="price">Precio</label>
            <input type="number"
              name="price"
              id="price"
              value={form.price}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />

            {errors.price && <p className={style.error}>{errors.price}</p>}
          </div>

          <div className={style.stockVendido}>
            <label htmlFor="stock">Disponible</label>
            <input type="number"
              name="stock"
              id="stock"
              min="0"
              value={form.stock}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />

            <label htmlFor="sold">Vendidos</label>
            <input type="number"
              name="sold"
              id="sold"
              min="0"
              value={form.sold}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div className="w-75 mx-auto">
            <h2>Talle/s</h2>
            {form.category === "calzado" ?
              infoJson.hombres.calzado[0].talle.map(
                e => {
                  return (
                    <div key={e} className="form-check-inline">
                      <label className="form-check-label" htmlFor={e}>
                        <input type="checkbox"
                          className="form-check-input"
                          name={e}
                          id={e}
                          value={form.size}
                          onBlur={handleOnBlur}
                          onChange={handleChecked} />
                        {e}
                      </label>
                    </div>

                  )
                }
              )
              :
              infoJson.hombres.camperas[0].talle.map(
                e => {
                  return (
                    <div key={e} className="form-check-inline">
                      <label className="form-check-label" htmlFor={e}>
                        <input type="checkbox"
                          className="form-check-input"
                          name={e}
                          id={e}
                          value={form.size}
                          onBlur={handleOnBlur}
                          onChange={handleChecked} />
                        {e}
                      </label>
                    </div>
                  )
                }
              )
            }
            {errors.size && <p className={style.error}>{errors.size}</p>}
          </div>

          <div className={style.calificacion}>
            <label htmlFor="score">Calificacion</label>
            <input type="number"
              name="score"
              min="0"
              max="5"
              step="0.1"
              id="score"
              value={form.score}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div className={style.genre}>
            <label htmlFor="genre">Genero</label>
            <select name="genre" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option style={{ display: "none" }}>Genre</option>
              <option value="hombre" >Hombre</option>
              <option value="mujer" >Mujer</option>
            </select>

            {errors.genre && <p className={style.error}>{errors.genre}</p>}
          </div>
        </form>
      </div>
    </div>
  )
}