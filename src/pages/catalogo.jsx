import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import DefaultTemplate from '../templates/DefaultTemplate'
import { CatalogDisplayer } from '../Components'


const Catalogo = () => {
    const { allStrapiProdutos: { products } } = useStaticQuery(graphql`
        {
            allStrapiProdutos {
                products:nodes {
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
    `)

    return (
        <DefaultTemplate>
            <CatalogDisplayer products={products}/>
        </DefaultTemplate>
    )
}
 
export default Catalogo;