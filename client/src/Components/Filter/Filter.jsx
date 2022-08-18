import React from 'react';
import { filterByCategory } from '../../Redux/Action';

export default function filterbyCategory (){


/*function handleFilterCategory(e){
 e.preventDefault();
 dispatch(filterByCategory(e.target.value))

}*/

    return (

        <div className={`${styles.container_Filters}`} style={{ border: '1px solid red' }}>
 <h3>Filtro</h3>
 <div>
     <h4>Categoria</h4>
     <select class="form-select" aria-label="Default select example">
         <option selected>Indumentaria</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
     </select>
 </div>
 <div>
     <h4>Marcas</h4>
     <select class="form-select" aria-label="Default select example">
         <option selected>Selecciona una marca</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
     </select>
 </div>
 <div>
     <h4>Talle Calzado</h4>
     <select class="form-select" aria-label="Default select example">
         <option selected>Selecciona un talle</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
     </select>
 </div>
 <div>
     <h4>Talle Indumentaria</h4>
     <select class="form-select" aria-label="Default select example">
         <option selected>Selecciona un talle</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
     </select>
 </div>
 <div>
     <h4>Precio</h4>
     <label for="customRange1" class="form-label">Example range</label>
     <input type="range" class="form-range" id="customRange1"></input>

     <p>Mostramos la info del range</p>
 </div>
</div>
    )
}

 