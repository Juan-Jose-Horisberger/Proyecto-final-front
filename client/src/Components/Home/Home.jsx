import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.css";
import {
  getAllProducts,
  getUsers,
  createUser,
  getUserDetail,
} from "../../Redux/Action";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import Filters from "../Filter/Filters.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../Footer/Footer";

export default function Home({ socket, boolean, booleanSearchBar }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const allUsers = useSelector((state) => state.allUsers);
  const allProducts = useSelector((state) => state.products);
  const [loaded, setLoaded] = useState(false);

  let searchUser;

  if (!isLoading && isAuthenticated) {
    searchUser = allUsers.length
      ? allUsers.filter((e) => e.email === user.email)
      : "nada";
  }
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      if (searchUser === "nada" || !searchUser.length) {
        dispatch(createUser(user));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    dispatch(getUsers());
    if (boolean) {
      setLoaded(true);
      return;
    }
    if (booleanSearchBar) {
      setLoaded(true);
      return;
    }
    dispatch(getAllProducts()).then(
      (res) => typeof res === "object" && setLoaded(true)
    );
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, dispatch]);

  return (
    <div
      className={`${styles.container} container-fluid p-0 d-flex flex-wrap justify-content-evenly`}
    >
      <div className={`col-12 ${styles.container_SearchBar}`}>
        <SearchBar socket={socket} />
      </div>

      <Filters />

      <Pagination allProducts={allProducts} loaded={loaded} />

      <Footer />
    </div>
  );
}
