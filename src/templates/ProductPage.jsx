import React from 'react';
import { graphql } from 'gatsby'
import { ProductPageCarousel, ProductPageForm, ProductPageDescription } from '../Components'
import * as styles from '../styles/ProductPage.module.css'

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
        <>
            <div className={styles.slugTitle}>{produto.slug}</div>
            <div className={styles.productPageMajorContainer}>
                <ProductPageCarousel imagesArray={imagesArray}/>
                <ProductPageForm productData={produto}/>
            </div>
            <ProductPageDescription description={produto.descricao}/>
        </>
    );
}

export const query = graphql`
    query ($slug: String) {
        produto:strapiProdutos(slug: {eq: $slug}) {
            preco
            preco_comparativo
            cores
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