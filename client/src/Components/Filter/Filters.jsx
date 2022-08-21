import React from 'react';
import { useDispatch } from 'react-redux';
import {genresFilter,brandFilter,categoryFilter,sizeClothingFilter} from '../../Redux/Action'
import styles from './Filters.module.css';

export default function Filters() {
    const dispatch = useDispatch()
    
  function handleFilterByBrand(e){
        e.preventDefault();
        dispatch (brandFilter(e.target.value))
    }

  function handleFilterCategory(e){
        e.preventDefault();
        dispatch(categoryFilter(e.target.value))
    }

    function handleFilterByGenre(e){
       e.preventDefault();
       dispatch(genresFilter(e.target.value))
    }
    function handleSizeChothing(e){
        e.preventDefault();
        dispatch(sizeClothingFilter(e.target.value))
    }
    
   
    return (

        <div className={`${styles.container_Filters}`} style={{ border: '1px solid red' }}>
            <h3>Filtro</h3>
            <div>
                <h4>Categoria</h4>
                <select onChange ={(e)=>handleFilterCategory(e)} className="form-select" aria-label="Default select example">
                    <option >Indumentaria</option>
                    <option value="campera">Camperas</option>
                    <option value="buzo">Buzos</option>
                    <option value="pantalon">Pantalones</option>
                    <option value="calzado">Zapatillas</option>
                    
                </select>
            </div>
            <div>
                <h4>Genero</h4>
                <select onChange ={(e)=>handleFilterByGenre(e)} className="form-select" aria-label="Default select example">
                    <option >Indumentaria </option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                    
                </select>
            </div>
            <div>
                <h4>Marcas</h4>
                <select onChange ={(e)=>handleFilterByBrand(e)} className="form-select" aria-label="Default select example">
                    <option >Selecciona una marca</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                    <option value="Puma">Puma</option>
                </select>
            </div>
            <div>
                <h4>Talle Calzado</h4>
                <select onChange ={(e)=>handleSizeChothing(e)} className="form-select" aria-label="Default select example">
                    <option >Selecciona un talle</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                </select>
            </div>
            <div>
                <h4>Talle Indumentaria</h4>
                <select onChange ={(e)=>handleSizeChothing(e)} className="form-select" aria-label="Default select example">
                    <option >Selecciona un talle</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                </select>
            </div>
            
            <div>
                <h4>Precio</h4>
                <label className="form-label">Example range</label>
                <input type="range" className="form-range" id="customRange1"></input>

                <p>Mostramos la info del range</p>
            </div>
        </div>
    )
}

