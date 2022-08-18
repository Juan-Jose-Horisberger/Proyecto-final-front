import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import infoJson from "../../info.json"

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

  if (!form.name.trim() && value === "name") {
    errors.name = "El nombre del producto es requerido"
  }else if (!regexName.test(form.name.trim()) && value === "name"){
    errors.name = "El nombre del producto solo acepta letras y espacios."
  };

  if (form.brand === "" && value === "brand") {
    errors.brand = "Debes seleccionar una marca"
  };

  if (form.category === "" && value === "category") {
    errors.category = "El producto debe pertenecer a una categoria"
  };

  if (form.genre === "" && value === "genre") {
    errors.genre = "El producto debe pertenet a un genero"
  };

  return errors;
}


export default function FormProduct() {
  const {
    form,
    setForm,
    errors,
    handleOnChange,
    handleSubmit,
    handleChecked,
    handleOnBlur
  } = useForm(initialForm, validateForm)


  return (
    <div>
      <Link to="/Home">Home</Link>
      <div>
        <h2>Agrega un producto al catalogo</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text"
              name="name"
              id="name"
              value={form.name}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
              {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select name="category" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option value="" >Category</option>
              <option value="calzado" >Calzado</option>
              <option value="camiseta" >Camiseta</option>
              <option value="pantalon" >Pantalon</option>
              <option value="buzo" >Buzo</option>
              <option value="campera" >Campera</option>
            </select>
            {errors.category && <p>{errors.category}</p>}
          </div>

          <div>
            <label htmlFor="brand">Marca</label>
            <select name="brand" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option value="" >Brand</option>
              <option value="Adidas" >Adidas</option>
              <option value="Nike" >Nike</option>
              <option value="Puma" >Puma</option>
            </select>
            {errors.brand && <p>{errors.brand}</p>}
          </div>

          <div>
            <label htmlFor="price">Precio</label>
            <input type="number"
              name="price"
              id="price"
              value={form.price}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="stock">Disponible</label>
            <input type="number"
              name="stock"
              id="stock"
              min="0"
              value={form.stock}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="image">Imagen</label>
            <input type="text"
              name="image"
              id="image"
              value={form.image}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="sold">Vendidos</label>
            <input type="number"
              name="sold"
              id="sold"
              min="0"
              value={form.sold}
              onBlur={handleOnBlur}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="size">Talle/s</label>
            {form.category === "calzado" ?
              infoJson.hombres.calzado[0].talle.map(
                e => {
                  return (
                    <div key={e}>
                      <input type="checkbox"
                        name={e}
                        id={e}
                        value={form.size}
                        onBlur={handleOnBlur}
                        onChange={handleChecked} />
                      {e}
                    </div>

                  )
                }
              )
              :
              infoJson.hombres.camperas[0].talle.map(
                e => {
                  return (
                    <div key={e}>
                      <label htmlFor={e} className="label-create">
                        <input type="checkbox"
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
          </div>

          <div>
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

          <div>
            <label htmlFor="genre">Genero</label>
            <select name="genre" onChange={handleOnChange} onBlur={handleOnBlur}>
              <option value="" >Genre</option>
              <option value="hombre" >Hombre</option>
              <option value="mujer" >Mujer</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}