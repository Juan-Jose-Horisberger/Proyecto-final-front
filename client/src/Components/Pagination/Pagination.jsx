import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.css';
import Product from '../Product/Product.jsx';
import ReactPaginate from 'react-paginate';
import flechaRightIcon from '../../Imagenes/flecha1.svg'

export default function Pagination({ allProducts, loaded }) {

    // return (

    // <div className={`${styles.container_Cards} col-9`} style={{ border: '1px solid red' }}>

    //     {
    //         loaded ? (
    //             <div className={`d-flex flex-wrap justify-content-sm-evenly`}>
    //                 {allProducts.length ? allProducts.map((p, i) =>
    //                     <Product
    //                         key={i}
    //                         id={p.id}
    //                         name={p.nombre}
    //                         price={p.precio}
    //                         image={p.img}
    //                     />
    //                 )
    //                     : <h1>No se encontro lo que se esta buscando</h1>
    //                 }
    //             </div>
    //         )
    //         : <p>Loading...</p>
    //     }

    // </div>

    // )

    // Comenzamos con una lista vacía de elementos.
    const [currentItems, setCurrentItems] = useState([]); //Los elementos que se mostraran en la pag actual
    const [pageCount, setPageCount] = useState(0); //recuento de paginas
    const [itemOffset, setItemOffset] = useState(0); //Indice del primer elemento de la pagina actual (creo que deberia ser 1)
    const itemsPerPage = 9; //Elementos por pagina

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage; //Indice del ultimo elemento de la pagina actual
        setCurrentItems(allProducts.slice(itemOffset, endOffset)); //Tomamos una parte del array
        setPageCount(Math.ceil(allProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, allProducts]);

    const handlePageClick = (event) => { //Esta funcion cambiamos el indice del primer elemento en la pagina actual
        const newOffset = (event.selected * itemsPerPage) % allProducts.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={`${styles.container_Cards} col-9`} style={{ border: '1px solid red' }}>

            {
                loaded ? (
                    <div className={`d-flex flex-wrap justify-content-sm-evenly`}>
                        {currentItems.length ? currentItems.map((p, i) =>
                            <Product
                                key={i}
                                id={p.id}
                                name={p.nombre}
                                price={p.precio}
                                image={p.img}
                            />
                        )
                            : <h1>No se encontro lo que se esta buscando</h1>
                        }
                    </div>
                )
                    : <p>Loading...</p>
            }

            <>
                <ReactPaginate
                    breakLabel={'...'}                  //Etiqueta que seran los ...
                    nextLabel="⇾"
                    onPageChange={handlePageClick}      //Cada ves que cambiemos la pag se ejecuta una funcion
                    pageRangeDisplayed={3}              //El numero de pagina que queremos que se muestre antes de los ...
                    pageCount={pageCount}               //Mostramos los numeros de pag
                    previousLabel="⇽"          //Etiqueta previous
                    renderOnZeroPageCount={null}
                    containerClassName={`${styles.pagination}`} //Decimes que el contenedor tendra como clase pagination
                    pageLinkClassName={`${styles.page_num}`}    //Cada elemento por pagina tendra el nombre de clase page-num
                    previousClassName={`${styles.previous}`}       //Etiqueta + nombre de clase, que me permitira darle estilos a el boton previos
                    nextClassName={`${styles.next}`}            //Etiqueta + nombre de clase, que me permitira darle estilos a el boton previos
                    activeLinkClassName={`${styles.active}`}
                />
            </>
        </div>
    );
}