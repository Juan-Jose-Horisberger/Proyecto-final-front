import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home(){
    return(
        <div className={styles.container}>
            <h1>Hola estas en Home</h1>

            <Link to="/ProductDetail">
                Ir a Productdetail
            </Link>
        </div>
    )
}