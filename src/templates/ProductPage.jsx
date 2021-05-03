import React from 'react';
import DefaultTemplate from './DefaultTemplate.jsx'
import { graphql } from 'gatsby'
import { ProductPageCarousel } from '../Components'

const ProductPage = (
    {
        data: {
            produto: {
                imagem_de_capa,
                imagens_secondarias
            },
            produto
        }
    }
) => {
    const imagesArray = [{localFile: imagem_de_capa}, ...imagens_secondarias]

    return (
        <DefaultTemplate>
            <div>
                <ProductPageCarousel imagesArray={imagesArray}/>
            </div>
        </DefaultTemplate>
    );
}

export const query = graphql`
    query ($slug: String) {
        produto:strapiProdutos(slug: {eq: $slug}) {
            preco
            preco_comparativo
            slug
            tamanhos
            titulo
            descricao
            imagem_de_capa {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            imagens_secondarias {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 900, maxHeight: 900) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`
 
export default ProductPage;