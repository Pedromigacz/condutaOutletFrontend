import React, { useState, useContext } from 'react';
import { ContactContext } from '../contexts/ContactContext'
import * as styles from '../styles/MobileNavbar.module.css'
import BurguerIcon from '../vectors/BurguerIcon.inline.svg'
import { graphql, useStaticQuery, Link } from 'gatsby'

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { openContactModal } = useContext(ContactContext)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

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
        <>
            <button
                className={styles.burguerMenu}
                onClick={openMenu}
            ><BurguerIcon /></button>
            {isMenuOpen && (
            <div className={styles.modalMenu}>
                <button
                aria-label="closeMenu"
                className={styles.closeMenu}
                onClick={closeMenu}
                >
                    X
                </button>
                <div
                    className={styles.link}
                    onClick={closeMenu}
                ><Link to="/">Home</Link></div>
                <div
                    className={styles.link}
                    onClick={closeMenu}
                ><Link to="/catalogo">Shop</Link></div>
                <div
                    className={styles.link}
                    onClick={e => {
                        openContactModal()
                    }}
                >Contato</div>
                <h4 className={styles.categoriesDisclaimer}>Categorias:</h4>
                {categorias.map((categoria, key) => (
                    <div key={key} className={styles.link}>
                        <Link to={`/categorias/${categoria.nome}`} onClick={closeMenu}>
                            {categoria.nome}
                        </Link>
                    </div>
                ))}  
            </div>
            )}
        </>
    );
}
 
export default MobileNavbar;