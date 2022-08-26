import React from 'react';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getProductByName, clearNotifications } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import CartIcon from '../../Imagenes/cart.svg';
import FavoritesIcon from '../../Imagenes/favorites.svg';
import FormIcon from '../../Imagenes/form.svg';

import { useEffect } from 'react';


import { useAuth0 } from "@auth0/auth0-react";

export default function SearchBar({ socket }) {
    const dispatch = useDispatch();

    
   
    const notifications = useSelector(state => state.newNotification);

    const [productName, setProductName] = useState("")
    const countNotifications = useSelector(state => state.counterNotification);
    const { loginWithRedirect } = useAuth0();


    function handleOnClick() {
        productName ? dispatch(getProductByName(productName)) : alert("No escribiste nada");
        setProductName("");
    }

    function setNotificationsTo0() {
        dispatch(clearNotifications());
    }

    function handleNotification() {
        //seguir.. xD
    }

    // useEffect(() => {

    // }, [countNotifications])

    return (
        <div className={`${styles.container} container-fluid p-0 m-0`} >

            <div>
                <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.container_NavBar}`}>
                    <div className="container-fluid d-flex flex-wrap">
                        <Link to='/' className="navbar-brand d-flex col-2 me-0">
                            <h1 className='mb-0'>GAED.JM</h1>
                        </Link>
                        <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler">
                                <img src="https://www.svgrepo.com/show/419541/menu-list-line.svg" width="40px" alt="image" />
                            </span>
                        </button>

                        <div className={`col-10 collapse navbar-collapse row`} id="navbarSupportedContent">
                            <ul className="d-flex justify-content-around flex-wrap m-0 p-0" >
                                {/* <h1></h1> navbar-nav col-12 col-lg-8 d-flex justify-content-sm-start justify-content-around */}

                                <div
                                    className={`d-flex justify-content-around align-items-center ${styles.container_Info_Navbar}`}
                                    style={{ border: '1px solid red' }}>
                                    {/* <Link to='/CreateProduct' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none' }} >
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{ color: 'white' }} aria-current="page">Crear producto</p>
                                    </Link> */}
                                    <Link to='/Offers' className="nav-item mx-3  mx-lg-2" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{ color: 'white' }}>Ofertas</p>
                                    </Link>
                                    <Link to='/Contact' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{ color: 'white' }} aria-current="page">Quienés somos</p>
                                    </Link>
                                    <Link to='/Contact' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{ color: 'white' }} aria-current="page">Contacto</p>
                                    </Link>
                                </div>


                                <div className={`input-group rounded d-flex align-items-center ${styles.container_Searchbar}`} style={{ width: "250px" }}>
                                    <input type="search"
                                        className="form-control rounded pe-0 me-0"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                        value={productName}
                                        onChange={e => setProductName(e.target.value)}
                                    />

                                    <span className={`input-group-text border-0 ${styles.button_Search}`} id="search-addon">
                                        <i onClick={handleOnClick} className={`p-0`}>
                                            <img src="https://www.svgrepo.com/show/44820/magnifying-glass.svg" width="27px" alt="" />
                                        </i>
                                    </span>
                                </div>

                                <div className={`d-flex justify-content-center align-items-center flex-nowrap ${styles.container_favAndCart}`}>
                                    <div className='col'>
                                        <Link to='/Cart'>
                                            <img src={CartIcon} alt="img-icon" style={{ width: "30px" }} />
                                        </Link>
                                    </div>

                                    <div className={`col`}>
                                        <Link to='/FavoriteProduct'>
                                            <img src={FavoritesIcon} alt="img-icon" style={{ width: "27px" }} />
                                        </Link>
                                    </div>
                                    <div className='col'>
                                        <img onClick={() => loginWithRedirect()} src="https://www.svgrepo.com/show/421823/user-people-man.svg" alt="img-icon" />
                                    </div>
                                    <div className={`${styles.container_notification}`}>

                                        {/* <Link to="">
                                            <img src="https://www.svgrepo.com/show/281772/alarm-bell.svg" style={{ width: "27px" }} alt="" />
                                            <div>{countNotifications}</div>
                                        </Link> */}

                                        <div onClick={() => setNotificationsTo0()} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                                            <img src="https://www.svgrepo.com/show/281772/alarm-bell.svg" style={{ width: "27px" }} alt="" />
                                            <div>{notifications.counter}</div>
                                        </div>
                                    </div>
                                    <div className="offcanvas offcanvas-end" id="offcanvasRight">
                                        <div className="offcanvas-header">
                                            <h5>Notificaciones</h5>
                                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                        </div>
                                        <div className="offcanvas-body">
                                            {
                                                notifications.length && notifications.newProducts.map((p, i) => {
                                                    p.offert
                                                        ? (
                                                            <div key={i}>
                                                                <p>{p.image}</p>
                                                                <p>{p.name}</p>
                                                            </div>
                                                        )
                                                        : (
                                                            <div key={i}>
                                                                <p>{p.image}</p>
                                                                <p>{p.name}</p>
                                                            </div>
                                                        )
                                                })
                                            }
                                        </div>
                                    </div>

                                </div>

                            </ul>
                        </div>

                    </div>
                </nav>

            </div>
        </div>
    )
}