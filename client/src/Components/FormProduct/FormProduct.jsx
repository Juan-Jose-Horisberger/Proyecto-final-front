import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import infoJson from "../../info.json";
import style from "./FormProduct.module.css";
import Cookies from "universal-cookie";

export default function FormProduct() {
  var cookies = new Cookies();

  const initialForm = {
    name: cookies.get("name"),
    brand: cookies.get("brand"),
    category: cookies.get("category"),
    price: cookies.get("price"),
    stock: cookies.get("stock"),
    image: "",
    // sold: cookies.get("sold"),
    size: [],
    // score: cookies.get("score"),
    genre: cookies.get("genre"),
    offer: undefined,
    discount: "",
  };

  const validateForm = (form, nameInput, setValidate) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (nameInput.includes("name")) {
      if (!form.name) {
        errors.name = "El nombre del producto es requerido";
        setValidate({ ...validate, name: true });
      } else if (!regexName.test(form.name)) {
        errors.name = "El nombre del producto solo acepta letras y espacios.";
        setValidate({ ...validate, name: true });
      } else {
        setValidate({ ...validate, name: false });
      }
    }

    if (nameInput.includes("category")) {
      if (!form.category) {
        errors.category = "Debes seleccionar una categoria";
        setValidate({ ...validate, category: true });
      } else {
        setValidate({ ...validate, category: false });
      }
    }

    if (nameInput.includes("brand")) {
      if (!form.brand) {
        errors.brand = "Debes seleccionar una marca";
        setValidate({ ...validate, brand: true });
      } else {
        setValidate({ ...validate, brand: false });
      }
    }

    if (nameInput.includes("image")) {
      if (form.image === "") {
        errors.image = "El producto necesita una imagen";
        setValidate({ ...validate, image: true });
      } else {
        setValidate({ ...validate, image: false });
      }
    }

    if (nameInput.includes("price")) {
      if (form.price > 150000) {
        errors.price = "El precio excede el maximo permitido";
        setValidate({ ...validate, price: true });
      } else if (form.price < 0) {
        errors.price = "El precio no puede ser menor a 0";
        setValidate({ ...validate, price: true });
      } else if (!form.price) {
        errors.price = "El precio es requerido";
        setValidate({ ...validate, price: true });
      } else {
        setValidate({ ...validate, price: false });
      }
    }

    if (nameInput.includes("stock")) {
      if (form.stock < 0) {
        errors.stock = "El disponible no puede ser menor a 0";
        setValidate({ ...validate, stock: true });
      } else if (!form.stock) {
        errors.stock = "El disponible es requerido";
        setValidate({ ...validate, stock: true });
      } else {
        setValidate({ ...validate, stock: false });
      }
    }

    // if (nameInput.includes("sold")) {
    //   if (form.sold < 0) {
    //     errors.sold = "El vendido no puede ser menor a 0";
    //     setValidate({ ...validate, sold: true });
    //   } else if (form.sold === "") {
    //     errors.sold = "La cantidad vendida es requerida";
    //     setValidate({ ...validate, sold: true });
    //   } else {
    //     setValidate({ ...validate, sold: false });
    //   }
    // }

    if (nameInput.includes("size")) {
      if (form.size.length === 0) {
        errors.size = "Debes seleccionar minimo 1 talle";
      }
    }

    if (nameInput.includes("genre")) {
      if (!form.genre) {
        errors.genre = "El producto debe pertener a un genero";
        setValidate({ ...validate, genre: true });
      } else {
        setValidate({ ...validate, genre: false });
      }
    }

    // if (nameInput.includes("score")) {
    //   if (form.score > 5) {
    //     errors.score = "La puntuacion excede el maximo permitido";
    //     setValidate({ ...validate, score: true });
    //   } else if (form.score < 0) {
    //     errors.score = "La puntuacion excede el minimo permitido";
    //     setValidate({ ...validate, score: true });
    //   } else if (form.score === "") {
    //     errors.score = "La puntuacion es requerida";
    //     setValidate({ ...validate, score: true });
    //   } else {
    //     setValidate({ ...validate, score: false });
    //   }
    // }

    if (nameInput.includes("offer")) {
      setValidate({});
    }

    if (nameInput.includes("discount")) {
      if (!form.discount) {
        errors.discount = "El descuento del producto es requerido";
        setValidate({});
      }
    }

    return errors;
  };

  const {
    form,
    errors,
    handleOnChange,
    handleSubmit,
    handleChecked,
    handleOnSubmit,
    uploadImage,
    validate,
    alert,
    setAlert,
    handleOffer,
    checkedInput,
    handleDiscount,
  } = useForm(initialForm, validateForm);
  const talleRopa = ["XS", "S", "M", "L", "XL", "XXL"];
  const talleCalzado = [
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
  ];

  return (
    <div className={style.containerPrincipal}>
      <p className="mt-3">
        <Link to="/">Inicio</Link>/Crear Producto
      </p>

      <div className={style.container}>
        <form onSubmit={handleSubmit} className={style.formulario}>
          <div className={style.divName}>
            <input
              type="text"
              className={`form-control ${
                validate.name
                  ? "is-invalid"
                  : validate.name !== false
                  ? cookies.get("name")
                  : "is-valid"
              }`}
              name="name"
              id="name"
              value={cookies.get("name")}
              placeholder="Nombre del producto..."
              onChange={handleOnChange}
            />
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>

          <div className={style.categoryBrand}>
            <div className={style.divCategory}>
              <label htmlFor="category">Categoria</label>
              <select
                name="category"
                onChange={handleOnChange}
                id="my_select"
                value={cookies.get("category")}
                className={`form-control ${
                  validate.category
                    ? "is-invalid"
                    : validate.category !== false
                    ? cookies.get("name")
                    : "is-valid"
                }`}
              >
                <option style={{ display: "none" }}>Categoria</option>
                <option value="calzado">Calzado</option>
                <option value="camiseta">Camiseta</option>
                <option value="pantalon">Pantalon</option>
                <option value="buzo">Buzo</option>
                <option value="campera">Campera</option>
              </select>

              {errors.category && (
                <p className={style.error}>{errors.category}</p>
              )}
            </div>

            <div className={style.divBrand}>
              <label htmlFor="brand">Marca</label>
              <select
                name="brand"
                onChange={handleOnChange}
                id="my_select"
                value={cookies.get("brand")}
                className={`form-control ${
                  validate.brand
                    ? "is-invalid"
                    : validate.brand !== false
                    ? cookies.get("name")
                    : "is-valid"
                }`}
              >
                <option style={{ display: "none" }}>Marca</option>
                <option value="Adidas">Adidas</option>
                <option value="Nike">Nike</option>
                <option value="Puma">Puma</option>
              </select>

              {errors.brand && <p className={style.error}>{errors.brand}</p>}
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="file"
              className={`form-control ${
                validate.image
                  ? "is-invalid"
                  : validate.image !== false
                  ? cookies.get("name")
                  : "is-valid"
              }`}
              id="inputGroupFile02"
              name="image"
              onChange={uploadImage}
            ></input>
          </div>

          {errors.image ? (
            <p className={style.error}>{errors.image}</p>
          ) : (
            !errors.image && (
              <div>
                <img
                  src={form.image}
                  alt="Image not found"
                  className={style.imagen}
                />
              </div>
            )
          )}

          <div className={style.stockPriceVendido}>
            <div className={style.divStockPriceSold}>
              <label htmlFor="price">Precio</label>
              <input
                type="number"
                className={`form-control ${
                  validate.price
                    ? "is-invalid"
                    : validate.price !== false
                    ? cookies.get("name")
                    : "is-valid"
                }`}
                name="price"
                id="price"
                placeholder="00.000"
                value={cookies.get("price")}
                onChange={handleOnChange}
              />
              {errors.price && <p className={style.error}>{errors.price}</p>}
            </div>

            <div className={style.divStockPriceSold}>
              <label htmlFor="stock">Disponible</label>
              <input
                type="number"
                className={`form-control ${
                  validate.stock
                    ? "is-invalid"
                    : validate.stock !== false
                    ? cookies.get("name")
                    : "is-valid"
                }`}
                name="stock"
                id="stock"
                min="0"
                placeholder="0"
                value={cookies.get("stock")}
                onChange={handleOnChange}
              />
              {errors.stock && <p className={style.error}>{errors.stock}</p>}
            </div>
            {/* 
            <div className={style.divStockPriceSold}>
              <label htmlFor="sold">Vendidos</label>
              <input
                type="number"
                className={`form-control ${
                  validate.sold
                    ? "is-invalid"
                    : validate.sold !== false
                    ? cookies.get("name")
                    : "is-valid"
                }`}
                name="sold"
                id="sold"
                min="0"
                placeholder="0"
                value={cookies.get("sold")}
                onChange={handleOnChange}
              />
            </div> */}
          </div>

          <div className="w-75 mx-auto">
            <h2>Talle/s</h2>
            {form.category === "calzado"
              ? talleCalzado.map((e) => {
                  return (
                    <div
                      key={e}
                      className={`form-check-inline mb-5 px-2 ${style.containerCalzadoChecks}`}
                    >
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="size"
                          id={e}
                          value={e}
                          onClick={handleChecked}
                        />
                        {e}
                      </label>
                    </div>
                  );
                })
              : talleRopa.map((e, i) => {
                  return (
                    <div key={i} className="form-check-inline mb-5 px-2">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="size"
                          id={e}
                          value={e}
                          onClick={handleChecked}
                        />
                        {e}
                      </label>
                    </div>
                  );
                })}
            {errors.size && <p className={style.error}>{errors.size}</p>}
          </div>

          <div className={style.divGenre}>
            <label htmlFor="genre">Genero</label>
            <select
              name="genre"
              onChange={handleOnChange}
              id="my_select"
              value={cookies.get("genre")}
              className={`form-control ${
                validate.genre
                  ? "is-invalid"
                  : validate.genre !== false
                  ? cookies.get("name")
                  : "is-valid"
              }`}
            >
              <option style={{ display: "none" }}>Genero</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>

            {errors.genre && <p className={style.error}>{errors.genre}</p>}
          </div>

          {/* <div className={style.divScore}>
            <label htmlFor="score">Calificacion</label>
            <input
              type="number"
              className={`form-control ${
                validate.score
                  ? `is-invalid`
                  : validate.score !== false
                  ? cookies.get("name")
                  : "is-valid"
              }`}
              name="score"
              min="0"
              max="5"
              step="0.1"
              id="score"
              placeholder="0.0"
              value={cookies.get("score")}
              onChange={handleOnChange}
            />

            {errors.score && <p className={style.error}>{errors.score}</p>}
          </div> */}

          <div>
            <label className="form-check-label">En oferta</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="size"
              value={cookies.get("offer")}
              onChange={handleOffer}
            />
          </div>

          {checkedInput && (
            <div className="container-fluid">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount"
                  value="10%"
                  onChange={handleDiscount}
                ></input>
                <label className="form-check-label">10% de descuento</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount"
                  value="20%"
                  onChange={handleDiscount}
                ></input>
                <label className="form-check-label">20% de descuento</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount"
                  value="30%"
                  onChange={handleDiscount}
                ></input>
                <label className="form-check-label">30% de descuento</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount"
                  value="40%"
                  onChange={handleDiscount}
                ></input>
                <label className="form-check-label">40% de descuento</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="discount"
                  value="50%"
                  onChange={handleDiscount}
                ></input>
                <label className="form-check-label">50% de descuento</label>
              </div>
              {errors.discount && (
                <p className={style.error}>{errors.discount}</p>
              )}
            </div>
          )}

          <button onSubmit={handleOnSubmit} className={style.btnSubmit}>
            Sumar al catalogo
          </button>

          {alert ? (
            <div
              className={`${
                alert
                  ? style.container_AlertDangerOpen
                  : style.container_AlertDanger
              } alert alert-danger alert-dismissible fade show`}
            >
              Debes completar el formulario con la informacion{" "}
              <strong>correcta!</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setAlert()}
                aria-label="Close"
              ></button>
            </div>
          ) : alert !== false ? (
            <div></div>
          ) : (
            <div
              className={`${
                alert
                  ? style.container_AlertSuccess
                  : style.container_AlertSuccessOpen
              } alert alert-success alert-dismissible fade show`}
              role="alert"
            >
              El producto se ha <strong>sumado al cataglogo</strong> con exito!
              <button
                type="button"
                className="btn-close"
                onClick={() => setAlert()}
                aria-label="Close"
              ></button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
