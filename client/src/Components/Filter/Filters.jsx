import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByBrand, filterByCategory, filterByDress, filterByFootwear } from '../../Redux/Action';
import styles from './Filters.module.css';

export default function Filters() {
    const dispatch = useDispatch()

    /*function handleFilterByDress(e){
        e.preventDefault();
        dispatch(filterByDress(e.target.value))
    }*/

    /*function handleFilterByBrand(e){
        e.preventDefault();
        dispatch (filterByBrand(e.target.value))
    }*/

    /*function handleFilterByFootwear(e){
        e.preventDefault();
        dispatch(filterByFootwear(e.target.value))
    }*/


    return (

        <div className={`${styles.container_Filters}`} style={{ border: '1px solid red' }}>
            <h3>Filtro</h3>
            <div>
                <h4>Categoria</h4>
                <select className="form-select" aria-label="Default select example">
                    <option >Indumentaria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <h4>Marcas</h4>
                <select className="form-select" aria-label="Default select example">
                    <option >Selecciona una marca</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <h4>Talle Calzado</h4>
                <select className="form-select" aria-label="Default select example">
                    <option >Selecciona un talle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div>
                <h4>Talle Indumentaria</h4>
                <select className="form-select" aria-label="Default select example">
                    <option >Selecciona un talle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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

