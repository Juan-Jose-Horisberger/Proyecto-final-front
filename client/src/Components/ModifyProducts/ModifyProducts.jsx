import React, { useState } from "react";
import { useEffect } from "react";
import AdminProduct from "./AdminProduct.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Action";
import Filters from "../Filter/Filters";
import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./ModifyProducts.module.css";

export default function ModifyProduct() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(true);
  const allProductsSort = allProducts.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }

    return 0;
  });

  useEffect(() => {
    dispatch(getAllProducts()).then(
      (res) => typeof res === "object" && setLoaded(false)
    );
  }, []);
  // <SearchBar />;

  return (
    <div style={{ backgroundColor: "black" }}>
      <SearchBar />;
      <div className={style.containerPrincipal}>
        <Filters />

        <div className={style.container}>
          {loaded ? (
            <div className={style.spinner}>
              <p className={style.cargando}>Cargando...</p>
              <div
                className={`spinner-border`}
                style={{ width: "4rem", height: "4rem" }}
                role="status"
              >
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : (
            allProductsSort.length &&
            allProductsSort.map((p, i) => {
              return (
                <AdminProduct
                  key={i}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  offer={p.offer}
                  discount={p.discount}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
