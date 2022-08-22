import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { genresFilter, brandFilter, categoryFilter, sizeClothingFilter, filterByQuery } from '../../Redux/Action'
import styles from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();
  const [params, setParams] = useState("");
  const [talle, setTalle] = useState("indumentaria")

  //   function handleFilterByBrand(e){
  //         e.preventDefault();
  //         dispatch (brandFilter(e.target.value))
  //         console.log(params)
  //     }

  //   function handleFilterCategory(e){
  //         e.preventDefault();
  //         // params.set("category", "calzado")
  //         let params2 = serializeFormQuery(e.target);
  //         setParams(params2)
  //         dispatch(filterByQuery(params2))
  //     }

  //     function handleFilterByGenre(e){
  //        e.preventDefault();
  //        dispatch(genresFilter(e.target.value))
  //     }
  //     function handleSizeChothing(e){
  //         e.preventDefault();
  //         dispatch(sizeClothingFilter(e.target.value))
  //     }

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
      const act = params.concat(e.target.name + "=" + e.target.value + "&");
      dispatch(filterByQuery(act));
      setParams(act);
      console.log(act);
    };
  };


  return (

    <div className={`${styles.container_Filters}`}>
      <h3>Filtros</h3>
      <div>
        <h4>Categoria</h4>
        <select onChange={validate} name="category" className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }}>Selecciona una categoria</option>
          <option value="camiseta">Remeras</option>
          <option value="campera">Camperas</option>
          <option value="buzo">Buzos</option>
          <option value="pantalon">Pantalones</option>
          <option value="calzado">Zapatillas</option>

        </select>
      </div>
      <div>
        <h4>Genero</h4>
        <select onChange={validate} name='genre' className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }}>Selecciona un genero </option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>

        </select>
      </div>
      <div>
        <h4>Marcas</h4>
        <select onChange={validate} name="brand" className="form-select" aria-label="Default select example">
          <option style={{ display: "none" }}>Selecciona una marca</option>
          <option value="Adidas">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
        </select>
      </div>

        {talle === "calzado" ?
          <div>
            <h4>Talle Calzado</h4>
            <select onChange={validate} name="size" className="form-select" aria-label="Default select example">
              <option style={{ display: "none" }}>Selecciona un talle</option>
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
            <select onChange={validate} name="size" className="form-select" aria-label="Default select example">
              <option style={{ display: "none" }}>Selecciona un talle</option>
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

