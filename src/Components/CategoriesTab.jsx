import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby'

const CategoriesTab = ({styles}) => {
    const { allStrapiCategorias: { categorias } } = useStaticQuery(graphql`
        {
            allStrapiCategorias {
                categorias:nodes {
                    nome
                }
            }
        }
    `)
    return (
        <div className={styles.categoriesTabContainer}>
            <Link to="/catalogo" className={styles.categoryLine}>Geral</Link>
            <br/>
            {categorias.map((categoria, key) => (
                <span key={key}>
                <Link to={`/categorias/${categoria.nome}`} className={styles.categoryLine}>{categoria.nome}</Link>
                <br/>
                </span>
            ))}            
        </div>
    );
}
 
export default CategoriesTab;