import React from 'react';
import { ProductCard } from '../Components'
import * as styles from '../styles/CatalogDisplayer.module.css'

const CatalogDisplayer = ({products}) => (
    <div className={styles.catalogContainer}>
        {products.products.map((prod, key) => (
            <ProductCard product={prod} key={key}/>
        ))}
    </div>
)
 
export default CatalogDisplayer;