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

export default function Home({ socket }) {
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
  }, [isAuthenticated]);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllProducts()).then(
      (res) => typeof res === "object" && setLoaded(true)
    );
  }, []);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      dispatch(getUserDetail(user.email));
    }
  }, [user]);

  return (
    <div
      className={`${styles.container} container-fluid p-0 d-flex flex-wrap justify-content-evenly`}
    >
      <div className={`col-12 ${styles.container_SearchBar}`}>
        <SearchBar socket={socket} />
      </div>

      <Filters />

      <Pagination allProducts={allProducts} loaded={loaded} />
    </div>
  );
}
