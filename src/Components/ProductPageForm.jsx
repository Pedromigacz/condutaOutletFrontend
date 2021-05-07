import React, { useState, useContext } from 'react';
import * as styles from '../styles/ProductPageForm.module.css'
import { CartContext } from '../contexts/CartContext'

const centsToReais = cents => (cents > 0) ? (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' }) : ''

const ProductPageForm = ({productData}) => {
    const tamanhos = productData.tamanhos.split('\n')
    const cores = productData.cores.split('\n')
    const [formData, setFormData] = useState({cor: cores[0], tamanho: tamanhos[0]})

    const { addItemToCart } = useContext(CartContext)

    const addToCartHandler = () => {
        const product = {
            main: {
                slug: productData.slug,
                ...formData
            },
            secondary: {
                titulo: productData.titulo,
                preco: productData.preco
            }
        }
        return addItemToCart(product)
    }

    return (
        <div className={styles.productPageFormContainer}>
            <h2 className={styles.formTitle}>{productData.titulo}</h2>
            <div className={styles.formPrice}>Preço {centsToReais(productData.preco)} <del>{centsToReais(productData.preco_comparativo)}</del></div>
            <div className={styles.sizeSelectorContainer}>
                <h4 className={styles.formLabel}>Tamanho do produto</h4>
                <span>
                    {tamanhos.map((tamanho, key) => (
                        <button
                            key={key}
                            onClick={e => setFormData({...formData, tamanho})}
                            className={styles.formButton + ' ' + ((tamanho === formData.tamanho) && styles.activeButton)}
                        >{tamanho}</button>
                    ))}
                </span>
            </div>
            <div className={styles.colorSelectorContainer}>
                <h4 className={styles.formLabel}>Cor do produto</h4>
                <span>
                    {cores.map((cor, key) => (
                        <button
                            key={key}
                            onClick={e => setFormData({...formData, cor})}
                            className={styles.formButton + ' ' + ((cor === formData.cor) && styles.activeButton)}
                        >{cor}</button>
                    ))}
                </span>
            </div>
            <div className={styles.addToCartButtonContainer}>
                <button
                    className={styles.addToCartButton}
                    onClick={addToCartHandler}
                >Adicionar à Sacola</button>
            </div>
        </div>
    );
}
 
export default ProductPageForm;