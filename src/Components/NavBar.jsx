import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import LogoIcon from '../vectors/Logo.inline.svg'
import BagIcon from '../vectors/BagIcon.inline.svg'
import BurguerMenu from '../vectors/BurguerIcon.inline.svg'
import SearchIcon from '../vectors/SearchIcon.inline.svg'
import Logo from '../vectors/Logo.inline.svg'
import { Link } from 'gatsby'
import * as styles from '../styles/Navbar.module.css'
import { CategoriesTab } from './'

const Navbar = () => {
    const { openCart } = useContext(CartContext)

    return (
        <div>
            <div className={styles.lineOne}>
                <span className={styles.logo}><Link to="/catalogo">
                    <LogoIcon className={styles.logoIcon}/>
                    <span className={styles.logoText}><strong>CONDUTA</strong>Outlet</span>
                </Link></span>
                <span className={styles.disclaimer} ><strong>frete grátis</strong> para todo o Brasil durante nossa semana de inauguração!</span>
                <BagIcon className={styles.bagIcon} onClick={openCart}/>
            </div>
            <div className={styles.lineTwo}>
                <div className={styles.categoriesOuterContainer}>
                    <div>
                        <BurguerMenu className={styles.burguerMenu}/>
                        <span className={styles.categoriesText}>CATEGORIAS</span>
                        <CategoriesTab styles={styles}/>
                    </div>
                </div>
                <span className={styles.navButtons}><Link to="/" activeClassName={styles.activeLink}>Home</Link></span>
                <span className={styles.navButtons}><Link to="/catalogo" activeClassName={styles.activeLink}>Shop</Link></span>
                <span className={styles.navButtons}>Contato</span>
                <span className={styles.rightIcons}>
                    <SearchIcon className={styles.searchIcon}/>
                    <span className={styles.separator}/>
                    <Link to="/"><Logo className={styles.secondaryLogo}/></Link>
                </span>
            </div>
        </div>
    );
}
 
export default Navbar;  