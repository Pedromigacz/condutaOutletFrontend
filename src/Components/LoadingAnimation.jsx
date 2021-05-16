import React from 'react';
import LoadingIcon from '../vectors/LoadingIcon.inline.svg'
import * as styles from '../styles/LoadingIcon.module.css'
import { motion } from 'framer-motion'

const LoadingAnimation = () => (
    <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={styles.iconContainer}
    ><LoadingIcon /></motion.div>
)
 
export default LoadingAnimation;