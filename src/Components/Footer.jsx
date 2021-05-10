import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import InstagramIcon from '../vectors/Instagram.inline.svg'
import Facebook from '../vectors/Facebook.inline.svg'
import * as styles from '../styles/Footer.module.css'
import { ContactData } from './'

const Footer = () => {
    const { metodosDePagamento, formasDeEnvio } = useStaticQuery(graphql`
    {
        metodosDePagamento: strapiAssets(assetName: {eq: "metodosDePagamento"}) {
            media {
                childImageSharp {
                    fixed(width: 256) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
        formasDeEnvio: strapiAssets(assetName: {eq: "formasDeEnvio"}) {
            media {
                childImageSharp {
                    fixed(width: 156) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
    `)

    return (
        <div className={styles.footer}>
            <div className={styles.footerFirstLine}>
                <span>
                    <h3 className={styles.footerCardTitle}>Pague com</h3>
                    <br/>
                    <Img fixed={metodosDePagamento.media.childImageSharp.fixed}/>
                </span>
                <span className={styles.footerCard}>
                    <h3 className={styles.footerCardTitle}>Formas de envio</h3>
                    <br/>
                    <Img fixed={formasDeEnvio.media.childImageSharp.fixed}/>
                </span>
                <ContactData />
            </div>
            <div className={styles.footerSecondLine}>
                <p><strong>Conduta</strong>Outlet - CPF: 117.374.599-81 © Todos os direitos reservados. 2021</p>
                <span className={styles.footerIconsContainer}>
                    <InstagramIcon />
                    <Facebook />
                </span>
            </div>
        </div>
    );
}
 
export default Footer;