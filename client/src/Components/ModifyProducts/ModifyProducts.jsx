import React, { useState } from "react";
import { useEffect } from "react";
import AdminProduct from "./AdminProduct.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Action";
import Filters from "../Filter/Filters";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./ModifyProducts.module.css";
import ReactPaginate from "react-paginate";

export default function ModifyProduct() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);
  const [currentItems, setCurrentItems] = useState([]); //Los elementos que se mostraran en la pag actual
  const [pageCount, setPageCount] = useState(0); //recuento de paginas
  const [itemOffset, setItemOffset] = useState(0); //Indice del primer elemento de la pagina actual (creo que deberia ser 1)
  const itemsPerPage = 9; //Elementos por pagina
  const renderOnce = React.useRef(0);

  const allProductsSort = allProducts.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }

    return 0;
  });

  //Mostrar flecha previos y next
  const [toShowPrevious, setToShowPrevious] = useState(false);
  const [toShowNext, setToShowNext] = useState(false);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage; //Indice del ultimo elemento de la pagina actual
    setCurrentItems(allProductsSort.slice(itemOffset, endOffset)); //Tomamos una parte del array
    setPageCount(Math.ceil(allProductsSort.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allProductsSort]);

  const handlePageClick = (event) => {
    //Esta funcion cambiamos el indice del primer elemento en la pagina actual
    const newOffset = (event.selected * itemsPerPage) % allProductsSort.length;
    setItemOffset(newOffset);

    pageCount - 1 === event.selected
      ? setToShowNext(false)
      : setToShowNext(true);
  };

  useEffect(() => {
    const num = Math.ceil(allProductsSort.length / itemsPerPage);
    num === 1 && setToShowNext(false);
  }, [pageCount]);

  useEffect(() => {
    if (renderOnce.current === 0) {
      setToShowNext(true);
      renderOnce.current = renderOnce.current + 1;
      return;
    }
    itemOffset !== 0 ? setToShowPrevious(true) : setToShowPrevious(false);
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [itemOffset]);

  useEffect(() => {
    dispatch(getAllProducts()).then(
      (res) => typeof res === "object" && setLoaded(true)
    );
  }, []);
  // <SearchBar />;

  return (
    <div styles={{ backgroundColor: "black" }}>
      <div className={styles.containerPrincipal}>
        {/* <Filters /> */}

        <div className={styles.container}>
          {loaded ? (
            <div className={`d-flex flex-wrap justify-content-sm-evenly`}>
              {currentItems.length ? (
                currentItems.map((p, i) => (
                  <AdminProduct
                    key={i}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    offer={p.offer}
                    discount={p.discount}
                  />
                ))
              ) : (
                <div className={`${styles.notResult}`}>
                  <p role="status">NO HUBO RESULTADOS PARA TU BÚSQUEDA</p>
                  <p onClick={() => window.location.reload(false)}>Reload</p>
                </div>
              )}
            </div>
          ) : (
            <div
              className={`d-flex justify-content-center flex-column ${styles.container_loading}`}
            >
              <p>Cargando...</p>
              <div
                className={`spinner-border ${styles.loading}`}
                style={{ width: "4rem", height: "4rem" }}
                role="status"
              >
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
        </div>
      </div>
      <>
        <ReactPaginate
          breakLabel={"..."} //Etiqueta que seran los ...
          nextLabel="⇾"
          onPageChange={handlePageClick} //Cada ves que cambiemos la pag se ejecuta una funcion
          pageRangeDisplayed={3} //El numero de pagina que queremos que se muestre antes de los ...
          pageCount={pageCount} //Mostramos los numeros de pag
          previousLabel="⇽" //Etiqueta previous
          renderOnZeroPageCount={null}
          containerClassName={`${styles.pagination}`} //Decimes que el contenedor tendra como clase pagination
          pageLinkClassName={`${styles.page_num}`} //Cada elemento por pagina tendra el nombre de clase page-num
          previousClassName={`${styles.previous} ${
            toShowPrevious && styles.open
          }`} //Etiqueta + nombre de clase, que me permitira darle estilos a el boton previos
          nextClassName={`${styles.next} ${!toShowNext && styles.close}`} //Etiqueta + nombre de clase, que me permitira darle estilos a el boton previos
          activeLinkClassName={`${styles.active}`}
        />
      </>
    </div>
  );
}
