import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.css';
import { getAllProducts } from '../../Redux/Action';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Filters from '../Filter/Filters.jsx';



export default function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products);
    const [loaded, setLoaded] = useState(false)
   
    useEffect(() => {
        // if (allProducts.length) {
        //     return;
        // }
        dispatch(getAllProducts());
        setLoaded(true);
        console.log(process.env);
    }, [])

    return (
        <div className={`${styles.container} container-fluid p-0 d-flex flex-wrap justify-content-evenly`}>
            <div className={`col-12 ${styles.container_SearchBar}`}>
                <SearchBar />
            </div>

            <Filters/>
            
            
          
            <Pagination
                allProducts={allProducts}
                loaded={loaded}
            />

        </div>
    )
}