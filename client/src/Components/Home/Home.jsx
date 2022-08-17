import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const allProducts = useSelector();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (allProducts.length) {
            return;
        }
        dispatch(getAllProducts());
        setLoaded(true);
    }, [])

    return (
        <div className={styles.container}>
            <h1>Hola estas en Home</h1>


            <Link to="/ProductDetail">
                Ir a Productdetail
            </Link>

            {
                loaded ? (
                    <div>
                        {allProducts.length && allProducts.map((p, i) =>
                            <div key={i}>
                                <Product
                                    id={p.id}
                                    name={p.nombre}
                                    price={p.precio}
                                    image={p.img}
                                />
                            </div>
                        )}
                    </div>
                )
                : <p>Loading...</p>
            }


        </div>
    )
}