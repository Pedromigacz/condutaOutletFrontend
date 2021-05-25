import React from 'react';
import { graphql } from 'gatsby'
import { CatalogDisplayer } from '../Components'
import * as styles from '../styles/CategoryPage.module.css'
import { SEO } from '../Components'

const CategoryPage = ({
    data: {
        allStrapiProdutos: {
            produtosDaCategoria
        }},
        pageContext: {
            slug
        }
    }) => {
    return (
        <>  
            <SEO
                url={"https://condutaoutlet.com/categorias/" + slug}
                title={"Conduta Outlet categoria" + slug}
                description={`Categoria ${slug} de Conduta Outlet, o melhor outlet da internet disponível pra você no conforto da sua casa`}
            />
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