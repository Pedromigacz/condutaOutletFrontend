import React, { useState } from 'react';
import Img from 'gatsby-image'
import * as styles from '../styles/ProductPageCarousel.module.css'

const ProductPageCarousel = ({imagesArray}) => {
    const [mainImage, setMainImage] = useState(0)

    return (
        <div className={styles.carouselContainer}>
            <span className={styles.caroulselButtonsContainer}>
                {imagesArray.map((image, key) => (
                    <button key={key} className={styles.carouselButton} onClick={e => {setMainImage(key)}}>
                        <Img fluid={image.localFile.childImageSharp.fluid}/>
                    </button>
                ))}
            </span>
            <div className={styles.mainImageContainer}>
                <Img fluid={imagesArray[mainImage].localFile.childImageSharp.fluid}/>
            </div>
        </div>
    );
}
 
export default ProductPageCarousel;