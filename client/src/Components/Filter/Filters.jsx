import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByBrand, filterByCategory, filterByFootwear ,filterByGenre,filterByClothingSize} from '../../Redux/Action';
import styles from './Filters.module.css';

export default function Filters() {
    const dispatch = useDispatch()

   

    function handleFilterByBrand(e){
        e.preventDefault();
        dispatch (filterByBrand(e.target.value))
    }

    function handleFilterByFootwear(e){
        e.preventDefault();
        dispatch(filterByFootwear(e.target.value))
    }

    function handleFilterByGenre(e){
       e.preventDefault();
       dispatch(filterByGenre(e.target.value))
    }
    function handleFilterSize(e){
        e.preventDefault();
        dispatch(filterByClothingSize(e.target.value))
    }

    return (

        <div className={`${styles.container_Filters}`} style={{ border: '1px solid red' }}>
            <h3>Filtro</h3>
            <div>
                <h4>Categoria</h4>
                <select className="form-select" aria-label="Default select example">
                    <option value='All'>Indumentaria</option>
                    <option value="Camperas">Camperas</option>
                    <option value="Buzos">Buzos</option>
                    <option value="Pantalones">Pantalones</option>
                    <option value="Zapatillas">Zapatillas</option>
                    <option value="Remeras">Remeras</option>
                </select>
            </div>
            <div>
                <h4>Genero</h4>
                <select onChange ={(e)=>handleFilterByGenre(e)} className="form-select" aria-label="Default select example">
                    <option value='All'>Indumentaria</option>
                    <option value="mujer">Mujer</option>
                    <option value="hombre">Hombre</option>
                    
                    
                </select>
            </div>
            <div>
                <h4>Marcas</h4>
                <select onChange ={(e)=>handleFilterByBrand(e)} className="form-select" aria-label="Default select example">
                    <option value='All'>Selecciona una marca</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Nike">Nike</option>
                    <option value="Puma">Puma</option>
                </select>
            </div>
            <div>
                <h4>Talle Calzado</h4>
                <select  onChange ={(e)=>handleFilterByFootwear(e)} className="form-select" aria-label="Default select example">
                    <option value='All'>Selecciona un talle</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                </select>
            </div>
            <div>
                <h4>Talle Indumentaria</h4>
                <select onChange ={(e)=>handleFilterSize(e)} className="form-select" aria-label="Default select example">
                    <option value="All">Selecciona un talle</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
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

