import React, { useState } from 'react';
import * as styles from '../styles/FloatingTagInput.module.css'
import { motion } from 'framer-motion'

const FloatingTagInput = ({label, className, value, onChange, disabled}) => {
    const [focused, setFocused] = useState(false)

    return (
        <div className={className + ' ' + styles.inputContainer}>
            <label>
                <motion.span
                    initial={{ y: 20 }}
                    animate={{
                        color: (value || focused) ? '#292929' : '#545454',
                        y: (value || focused) ? 10 : 28
                    }}
                    className={styles.label}
                >{label}</motion.span>
                <input
                    className={styles.input}
                    onChange={onChange}
                    value={value}
                    onFocus={e => setFocused(true)}
                    onBlur={e => setFocused(false)}
                    disabled={disabled ? true : ''}
                />
            </label>
        </div>
    );
}
 
export default FloatingTagInput;