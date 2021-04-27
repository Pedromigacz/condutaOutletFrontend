import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import TimeIcon from '../vectors/TimeIcon.inline.svg'
import WhatsappIcon from '../vectors/WhatsappIcon.inline.svg'
import InstagramIcon from '../vectors/Instagram.inline.svg'
import Facebook from '../vectors/Facebook.inline.svg'
import Email from '../vectors/Email.inline.svg'
import * as styles from '../styles/Footer.module.css'

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
                <span className={styles.paymentMethodsDisclaimer}>
                    <h3 className={styles.footerCardTitle}>Pague com</h3>
                    <br/>
                    <Img fixed={metodosDePagamento.media.childImageSharp.fixed}/>
                </span>
                <span className={styles.footerCard}>
                    <h3 className={styles.footerCardTitle}>Formas de envio</h3>
                    <br/>
                    <Img fixed={formasDeEnvio.media.childImageSharp.fixed}/>
                </span>
                <span className={styles.footerCard}>
                    <h3 className={styles.footerCardTitle}>Contato</h3>
                    <br/>
                    <p className={styles.footerCardText}>Este canal de atendimento destina-se somente para compras realizadas neste site.</p>
                    <div>
                        <TimeIcon className={styles.footerSvg} />
                        <h4 className={styles.footerCardSecondaryTitle + ' ' + styles.marginBottom}>Horário de atendimento:</h4>
                        <p className={styles.footerCardText + ' ' + styles.marginLeft}>Segunda à sexta: 9:00 -- 17:00</p>
                    </div>
                    <div className={styles.marginBottom}>
                        <Email className={styles.footerSvg} />
                        <p className={styles.footerCardSecondaryTitle}>condutaoutlet@gmail.com</p>
                    </div>
                    <div className={styles.marginBottom}>
                        <WhatsappIcon className={styles.footerSvg} />
                        <p className={styles.footerCardSecondaryTitle}>&#40;42&#41; 988355551</p>
                    </div>
                    <div className={styles.marginBottom}>
                        <WhatsappIcon className={styles.footerSvg} />
                        <p className={styles.footerCardSecondaryTitle}>&#40;11&#41; 957334164</p>
                    </div>
                </span>
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