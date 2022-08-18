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

const validateForm = () => {

}


export default function FormProduct() {
  const {
    form,
    setForm,
    errors,
    handleOnChange,
    handleSubmit,
    handleChecked
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
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="category">Categoria</label>
            <select name="category" onChange={handleOnChange}>
              <option value="" >Category</option>
              <option value="calzado" >Calzado</option>
              <option value="camiseta" >Camiseta</option>
              <option value="pantalon" >Pantalon</option>
              <option value="buzo" >Buzo</option>
              <option value="campera" >Campera</option>
            </select>
          </div>

          <div>
            <label htmlFor="brand">Marca</label>
            <select name="brand" onChange={handleOnChange}>
              <option value="" >Brand</option>
              <option value="Adidas" >Adidas</option>
              <option value="Nike" >Nike</option>
              <option value="Puma" >Puma</option>
            </select>
          </div>

          <div>
            <label htmlFor="price">Precio</label>
            <input type="number"
              name="price"
              id="price"
              value={form.price}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="stock">Disponible</label>
            <input type="number"
              name="stock"
              id="stock"
              value={form.stock}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="image">Imagen</label>
            <input type="text"
              name="image"
              id="image"
              value={form.image}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="sold">Vendidos</label>
            <input type="number"
              name="sold"
              id="sold"
              value={form.sold}
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
              id="score"
              value={form.score}
              onChange={handleOnChange} />
          </div>

          <div>
            <label htmlFor="genre">Genero</label>
            <select name="genre" onChange={handleOnChange}>
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