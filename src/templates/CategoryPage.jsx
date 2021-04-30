import React from 'react';
import DefaultTemplate from './DefaultTemplate.jsx'
import { graphql } from 'gatsby'
import { CatalogDisplayer } from '../Components'

const CategoryPage = ({ data: { allStrapiProdutos: { produtosDaCategoria } } }) => {

    return (
        <DefaultTemplate>
            <CatalogDisplayer products={produtosDaCategoria}/>
        </DefaultTemplate>
    );
}
 
export const query = graphql`
    query ($slug: String) {
        allStrapiProdutos(filter: {categorias: {elemMatch: {nome: {eq: $slug}}}}) {
            produtosDaCategoria:nodes {
                titulo
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