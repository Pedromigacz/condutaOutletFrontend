import React from 'react';
import * as styles from '../styles/ProductPageDescription.module.css'

const ProductPageDescription = ({description}) => (
    <div className={styles.descricaoContainer}>
        <h2 className={styles.descricaoTitle}>Mais informações sobre este item</h2>
        <div className={styles.descricaoMainText}>{description}</div>
    </div>
)

 
export default ProductPageDescription;