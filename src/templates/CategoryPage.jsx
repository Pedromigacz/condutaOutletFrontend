import React from 'react';
import { graphql } from 'gatsby'
import { CatalogDisplayer } from '../Components'
import * as styles from '../styles/CategoryPage.module.css'

const CategoryPage = ({ data: { allStrapiProdutos: { produtosDaCategoria } }, pageContext: { slug } }) => {
    return (
        <>
            <h1 className={styles.categoriesPageTitle}>{slug}</h1>
            <CatalogDisplayer products={produtosDaCategoria}/>
        </>
    );
}
 
export const query = graphql`
    query ($slug: String) {
        allStrapiProdutos(filter: {categorias: {elemMatch: {nome: {eq: $slug}}}}) {
            produtosDaCategoria:nodes {
                titulo
                slug
                preco
                preco_comparativo
                imagem_de_capa {
                    childImageSharp {
                        fluid(maxWidth: 380, maxHeight: 380) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`


export default CategoryPage;