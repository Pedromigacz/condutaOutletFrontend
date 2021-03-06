import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { CatalogDisplayer } from '../Components'
import { Seo } from '../Components'

const Catalogo = () => {
    const { allStrapiProdutos: { products } } = useStaticQuery(graphql`
        {
            allStrapiProdutos {
                products:nodes {
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
    `)

    return (
        <>  
            <Seo
                title="CONDUTAOutlet Catálogo"
                url="https://www.condutaoutlet.com/catalogo/"
                description="Catálogo do outlet mais bem conceituado da internet."
            />
            <CatalogDisplayer products={products}/>
        </>
    )
}
 
export default Catalogo;