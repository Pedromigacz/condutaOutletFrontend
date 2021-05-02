import React from 'react';
import * as styles from '../styles/ProductCard.module.css'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const centsToReais = cents => (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });

const ProductCard = ({ product }) => (
    <div className={styles.productCardContainer}>
        <Link to={`/produtos/${product.slug}`}><Img
            fluid={product.imagem_de_capa.childImageSharp.fluid}
            imgStyle={{ objectFit: "contain" }}
            className={styles.cardImage}
        /></Link>
        {product.preco_comparativo && <span className={styles.cardDiscountTag}>{
            Math.floor((product.preco_comparativo - product.preco) * 100 / product.preco_comparativo) + '% de desconto'
        }</span>}
        <Link to={`/produtos/${product.slug}`}><h2 className={styles.cardTitle}>{product.titulo}</h2></Link>
        <div className={styles.cardPriceContainer}>
            <span className={product.preco_comparativo && styles.cardRealPriceStyles}>{centsToReais(product.preco)} </span>
            {product.preco_comparativo && <span className={styles.cardOldPrice}>{centsToReais(product.preco_comparativo)}</span>}
        </div>
    </div>
)

export default ProductCard;