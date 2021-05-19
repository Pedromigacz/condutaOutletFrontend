import React, { useState, useContext } from 'react';
import { ContactContext } from '../contexts/ContactContext'
import { CartContext } from '../contexts/CartContext';
import * as styles from '../styles/MobileNavbar.module.css'
import BurguerIcon from '../vectors/BurguerIcon.inline.svg'
import BagIcon from '../vectors/BagIcon.inline.svg'
import { graphql, useStaticQuery, Link } from 'gatsby'

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { openContactModal } = useContext(ContactContext)
    const { openCart } = useContext(CartContext)

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
                className={styles.bagMenu}
                aria-label="Carrinho"
                onClick={openCart}
            ><BagIcon /></button>
            <button
                className={styles.burguerMenu}
                aria-label="Menu"
                onClick={openMenu}
            ><BurguerIcon /></button>
            {isMenuOpen && (
            <div className={styles.modalMenu}>
                <button
                aria-label="Fechar menu"
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