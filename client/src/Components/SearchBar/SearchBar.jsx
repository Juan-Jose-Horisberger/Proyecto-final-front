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
        <div className={`${styles.container} container-fluid`} style={{ border: "1px solid blue" }}>

            <nav className={`row`}>
                <div className={`col-12 d-flex justify-content-between`}> 

                    <ul className="col-3 p-0 d-flex flex-wrap" style={{border: "1px solid red"}}>
                        <Link to='/About' className={`col-4`} style={{textDecoration: "none"}}>
                            <li className="list-group-item">Nosotros</li>
                        </Link>
                        <li className="list-group-item col-4">Contacto</li>
                        <li className="list-group-item col-4">Ofertas</li>
                    </ul>

                    <h1>GAED.JM</h1>

                    <div className={`col-3`}>
                        <input
                            type="text"
                            value={productName}
                            placeholder="Buscar..."
                            onChange={e => setProductName(e.target.value)}
                        />

                        <button onClick={handleOnClick}>Buscar</button>
                    </div>


                    <div className={`col-3 d-flex ${styles.container_icons}`}>
                        <div>
                            <Link to='/Cart'>
                                <img src={CartIcon} alt="img-icon" />
                            </Link>
                        </div>

                        <div className={`mx-3`}>
                            <Link to='/FavoriteProduct'>
                                <img src={FavoritesIcon} alt="img-icon" />
                            </Link>
                        </div>
                        <div>
                            <Link to='/Login'>
                                <img src={FormIcon} alt="img-icon" />
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}