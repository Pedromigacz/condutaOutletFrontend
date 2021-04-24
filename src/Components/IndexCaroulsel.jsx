import React, { useRef } from 'react';
import * as styles from '../styles/IndexCaroulsel.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowHead from '../vectors/ArrowHead.inline.svg'

const IndexCaroulsel = () => {
    const sliderRef = useRef()
    const { allStrapiCarrossels: { nodes } } = useStaticQuery(graphql`
    {
        allStrapiCarrossels {
            nodes {
                imagem {
                    childImageSharp {
                        fluid(maxWidth: 640) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
    `)

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }
     
    const nextSlide = () => {
        sliderRef.current.slickNext()
    }
    
    const prevSlide = () => {
        sliderRef.current.slickPrev()
    }

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.arrowButton} onClick={prevSlide}><ArrowHead/></button>
            <button className={styles.arrowButton} onClick={nextSlide}><ArrowHead className={styles.rightArrow}/></button>
            <Slider {...settings} className={styles.slider} ref={sliderRef}>
                {nodes.map((image, key) => (
                    <div key={key} className={styles.caroulselImageContainer}>
                        <Img
                            fluid={image.imagem.childImageSharp.fluid}
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
 
export default IndexCaroulsel
