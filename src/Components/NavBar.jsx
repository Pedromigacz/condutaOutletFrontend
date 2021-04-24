import React from 'react';
import LogoIcon from '../vectors/Logo.inline.svg'
import BagIcon from '../vectors/BagIcon.inline.svg'
import BurguerMenu from '../vectors/BurguerIcon.inline.svg'
import SearchIcon from '../vectors/SearchIcon.inline.svg'
import Logo from '../vectors/Logo.inline.svg'
import * as styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            <div className={styles.lineOne}>
                <span className={styles.logo}>
                    <LogoIcon className={styles.logoIcon}/>
                    <span className={styles.logoText}><strong>CONDUTA</strong>Outlet</span>
                </span>
                <span className={styles.disclaimer} ><strong>frete grátis</strong> para todo o Brasil durante nossa semana de inauguração!</span>
                <BagIcon className={styles.bagIcon}/>
            </div>
            <div className={styles.lineTwo}>
                <div className={styles.categoriesOuterContainer}>
                    <div>
                        <BurguerMenu className={styles.burguerMenu}/>
                        <span className={styles.categoriesText}>CATEGORIAS</span>
                    </div>
                </div>
                <span className={styles.navButtons}>Home</span>
                <span className={styles.navButtons}>Shop</span>
                <span className={styles.navButtons}>Contato</span>
                <span className={styles.rightIcons}>
                    <SearchIcon className={styles.searchIcon}/>
                    <span className={styles.separator}/>
                    <Logo className={styles.secondaryLogo}/>
                </span>
            </div>
        </div>
    );
}
 
export default Navbar;  