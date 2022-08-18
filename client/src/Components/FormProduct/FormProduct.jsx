import React from "react";
import { Link } from "react-router-dom";

const initialForm = {
  name: "",
  brand: "",
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
    errors,
    handleOnChange,
    handleSubmit,
  } = useForm(initialForm, validateForm)


  return (
    <div>
      <Link to="/Home">Home</Link>
      <div>
        <h2>Agrega un producto al catalogo</h2>
        <form onSubmit={handleSubmit}>
          
        </form>
      </div>
    </div>
  )
}