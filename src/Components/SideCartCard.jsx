import React from 'react';
import * as styles from '../styles/SideCartCard.module.css'
import Img from 'gatsby-image'
import DeleteCartLineIcon from '../vectors/DeleteCartLineIcon.inline.svg'

const centsToReais = cents => (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });

const SideCartCard = ({line, id, removeItemFromCart}) => {

    console.log(line)
    return (
        <div className={styles.lineContainer}>
            <h4 className={styles.lineTitle}>{line.secondary.titulo}</h4>
            <div className={styles.lineIconContainer}>
                <Img fluid={line.secondary.icon.fluid}/>
            </div>
            <div className={styles.sizeColorContainer}>{`Tamanho ${line.main.tamanho}, cor ${line.main.cor}`}</div>
            <div className={styles.priceContainer}>{centsToReais(line.secondary.preco)}</div>
            <button
                className={styles.deleteLineIconContainer}
                aria-label="remover item do carrinho"
                onClick={e => {removeItemFromCart(id)}}
            ><DeleteCartLineIcon className={styles.deleteLineIcon}/></button>
        </div>
    );
}
 
export default SideCartCard;