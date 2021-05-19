import React, { useState, useContext } from 'react';
import { ContactContext } from '../contexts/ContactContext'
import { CartContext } from '../contexts/CartContext';
import * as styles from '../styles/MobileNavbar.module.css'
import BurguerIcon from '../vectors/BurguerIcon.inline.svg'
import BagIcon from '../vectors/BagIcon.inline.svg'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

const modalVariants = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
}

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
            <AnimatePresence exitBeforeEnter>
            {isMenuOpen && (
                <motion.div
                    className={styles.modalMenu}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
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
                </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
 
export default MobileNavbar;