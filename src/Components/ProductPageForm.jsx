import React from 'react';
import * as styles from '../styles/ProductPageForm.module.css'

const centsToReais = cents => (cents > 0) ? (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' }) : ''

const ProductPageForm = ({productData}) => {
    const tamanhos = productData.tamanhos.split('\n')
    const cores = productData.cores.split('\n')
    return (
        <div className={styles.productPageFormContainer}>
            <h2 className={styles.formTitle}>{productData.titulo}</h2>
            <div className={styles.formPrice}>Preço {centsToReais(productData.preco)} <del>{centsToReais(productData.preco_comparativo)}</del></div>
            <div className={styles.sizeSelectorContainer}>
                <h4 className={styles.formLabel}>Tamanho do produto</h4>
                <span>
                    {tamanhos.map((tamanho, key) => (
                        <button key={key} className={styles.formButton}>{tamanho}</button>
                    ))}
                </span>
            </div>
            <div className={styles.colorSelectorContainer}>
                <h4 className={styles.formLabel}>Cor do produto</h4>
                <span>
                    {cores.map((cor, key) => (
                        <button key={key} className={styles.formButton}>{cor}</button>
                    ))}
                </span>
            </div>
            <div className={styles.addToCartButtonContainer}>
                <button className={styles.addToCartButton}>Adicionar à Sacola</button>
            </div>
        </div>
    );
}
 
export default ProductPageForm;