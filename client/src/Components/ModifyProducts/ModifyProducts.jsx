import React from "react";
import { useEffect } from "react";
import Product from "../Product/Product.jsx";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Action";
import Filters from "../Filter/Filters";
import style from "./ModifyProducts.module.css";
import { TbTrashX } from "react-icons/tb";
import { HiOutlinePencil } from "react-icons/hi";

export default function ModifyProduct() {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
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
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={style.containerPrincipal}>
      <Filters />

      <div className={`col-12 col-lg-9`}>
        {allProductsSort.length &&
          allProductsSort.map((p, i) => {
            return (
              <div className="d-flex flex-wrap justify-content-sm-evenly">
                {/* <Link to={`/ProductDetail/${e.id}`}>
                  <div>
                    <img src={e.image} alt="" />
                  </div>

                  <div>
                    <p>{e.name}</p>
                    <p>${e.price}</p>
                  </div>
                  <div className={style.divBtn}>
                    <button>
                      <TbTrashX size="40px" color="white" />
                    </button>
                    <button>
                      <HiOutlinePencil size="40px" color="white" />
                    </button>
                  </div>
                </Link> */}
                <Product
                  key={i}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  offer={p.offer}
                  discount={p.discount}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
