import React from 'react';
import styles from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getProductByName } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import CartIcon from '../../Imagenes/cart.svg';
import FavoritesIcon from '../../Imagenes/favorites.svg';
import FormIcon from '../../Imagenes/form.svg';


export default function SearchBar() {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState("")

    function handleOnClick() {
        productName ? dispatch(getProductByName(productName)) : alert("No escribiste nada");
        setProductName("");
    }

    return (
        <div className={`${styles.container} container-fluid mb-4`}>

            <div className={`row ${styles.container_NavBar}`}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid d-flex flex-wrap">
                        <Link to='/' className="navbar-brand d-flex col-2">
                            <h1>GAED.JM</h1>
                        </Link>
                        <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler">
                                <img src="https://www.svgrepo.com/show/419541/menu-list-line.svg" width="40px" alt="image" />
                            </span>
                        </button>

                        <div className={`col-10 collapse navbar-collapse row`} id="navbarSupportedContent">
                            <ul className="d-flex justify-content-around flex-wrap m-0 p-0">
                                    {/* <h1></h1> navbar-nav col-12 col-lg-8 d-flex justify-content-sm-start justify-content-around */}

                                <div className={`col-6 d-flex justify-content-start align-items-center`} >
                                    <Link to='/CreateProduct' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none'}} >
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{color: 'white'}} aria-current="page">Crear producto</p>
                                    </Link>
                                    <Link to='/Contact' className="nav-item mx-3 mx-lg-2" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link mb-0 text-start text-sm-center`}style={{color: 'white'}}  aria-current="page">Contacto</p>
                                    </Link>
                                    <Link to='/Offers' className="nav-item mx-3  mx-lg-2" style={{ textDecoration: 'none' }}>
                                        <p className={`nav-link mb-0 text-start text-sm-center`} style={{color: 'white'}}>Ofertas</p>
                                    </Link>
                                </div>


                                <div className={`input-group rounded d-flex align-items-center`} style={{ width: "250px" }}>
                                    <input type="search"
                                        className="form-control rounded"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                        value={productName}
                                        onChange={e => setProductName(e.target.value)}
                                    />

                                    <span className={`input-group-text border-0 ${styles.button_Search}`} id="search-addon">
                                        <i onClick={handleOnClick}>
                                            <img src="https://www.svgrepo.com/show/44820/magnifying-glass.svg" width="27px" alt="" />
                                        </i>
                                    </span>
                                </div>

                                <div className={`d-flex justify-content-center align-items-center`}>
                                    <div>
                                        <Link to='/Cart'>
                                            <img src={CartIcon} alt="img-icon" style={{ width: "30px" }} />
                                        </Link>
                                    </div>

                                    <div className={`mx-3`}>
                                        <Link to='/FavoriteProduct'>
                                            <img src={FavoritesIcon} alt="img-icon" style={{ width: "27px" }} />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to='/Login'>
                                            <img src={FormIcon} alt="img-icon" />
                                        </Link>
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