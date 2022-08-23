import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByQuery, getAllProducts } from '../../Redux/Action'
import styles from './Filters.module.css';
import resetImage from "../../Imagenes/reset.svg"

export default function Filters() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const [talle, setTalle] = useState("indumentaria")

  const validate = (e) => {
    if (params.includes(e.target.name)) {

      if (e.target.name === "category") {
        if (e.target.value === "calzado") {
          const regex = /calzado|campera|camiseta|pantalon|buzo/i;
          const result = params.replace(regex, e.target.value);
          dispatch(filterByQuery(result));
          setParams(result);
          setTalle("calzado")
        };

        if (e.target.value !== "calzado") {
          const regex = /calzado|campera|camiseta|pantalon|buzo/i;
          const result = params.replace(regex, e.target.value);
          dispatch(filterByQuery(result));
          setParams(result);
          setTalle("indumentaria")
        }
      };

      if (e.target.name === "brand") {
        const regex = /Nike|Puma|Adidas/i;
        const result = params.replace(regex, e.target.value);
        dispatch(filterByQuery(result));
        setParams(result);
      };

      if (e.target.name === "genre") {
        const regex = /mujer|hombre/i;
        const result = params.replace(regex, e.target.value);
        dispatch(filterByQuery(result));
        setParams(result);
      };

      if (e.target.name === "size") {
        const regex = /XS|S|L|M|37|38|39|40|41|42|43/i;
        const result = params.replace(regex, e.target.value);
        dispatch(filterByQuery(result));
        setParams(result);
      };

    } else {
      const actualFilter = params.concat(e.target.name + "=" + e.target.value + "&");
      dispatch(filterByQuery(actualFilter));
      setParams(actualFilter);
    };
  };

  const reset = (e) => {
    dispatch(getAllProducts());

    var options = document.querySelectorAll('#my_select');
    for (var i = 0, l = options.length; i < l; i++) {
      options[i].selectedIndex = 0
    }
  }


  return (

    <div className={`${styles.container_Filters}`}>
      <div className={styles.containerBtn}>
        <h3>Filtros</h3>

        <button className={styles.btn} onClick={reset}>
          <img src={resetImage} alt="no" />
        </button>
      </div>

      <div>
        <h4>Categoria</h4>
        <select onChange={validate} id="my_select" name="category" className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }} defaultValue="selected">Selecciona una categoria</option>
          <option value="camiseta">Remeras</option>
          <option value="campera">Camperas</option>
          <option value="buzo">Buzos</option>
          <option value="pantalon">Pantalones</option>
          <option value="calzado">Zapatillas</option>

        </select>
      </div>
      <div>
        <h4>Genero</h4>
        <select onChange={validate} id="my_select" name='genre' className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }} defaultValue="selected">Selecciona un genero </option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>

        </select>
      </div>
      <div>
        <h4>Marcas</h4>
        <select onChange={validate} id="my_select" name="brand" className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }} defaultValue="selected">Selecciona una marca</option>
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
        </select>
      </div>

      {talle === "calzado" ?
        <div>
          <h4>Talle Calzado</h4>
          <select onChange={validate} id="my_select" name="size" className="form-select" aria-label="Default select example">
            <option style={{ display: "none" }} defaultValue="selected">Selecciona un talle</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
          </select>
        </div>

        :

        <div>
          <h4>Talle Indumentaria</h4>
          <select onChange={validate} id="my_select" name="size" className="form-select" aria-label="Default select example">
            <option style={{ display: "none" }} defaultValue="selected">Selecciona un talle</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select></div>}

      <div>
        <h4>Precio</h4>
        <label className="form-label">Example range</label>
        <input type="range" className="form-range" id="customRange1"></input>

        <p>Mostramos la info del range</p>
      </div>
    </div>
  )
}

