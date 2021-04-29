import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import { ProductCard } from '../Components'
import * as styles from '../styles/CatalogDisplayer.module.css'

const CatalogDisplayer = () => {
    const { allStrapiProdutos: products } = useStaticQuery(graphql`
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
        <div className={styles.catalogContainer}>
            {products.products.map((prod, key) => (
                <ProductCard product={prod} key={key}/>
            ))}
        </div>
    );
}
 
export default CatalogDisplayer;