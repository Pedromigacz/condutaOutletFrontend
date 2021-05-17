import axios from 'axios';
import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import * as styles from '../styles/Entrega.module.css'
import { FloatingTagInput, LoadingAnimation } from './'
import { motion } from 'framer-motion'

const stepVariants = {
    initial: {
      opacity: 0,
      x: 800,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        x: -800,
        transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
}

const Entrega = ({ error, setError }) => {
    const { address, setAdress } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        
        // Form validation
        let cep = address.cep.replace(/'/g, '')
        if(/[0-9]{8}/.test(cep) === false) {
            setError('Por favor, prrencha o cep somente com 8 números')
            return
        }

        setLoading(true)
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(e => {
            if(e.data.erro === true) {
                setLoading(false)
                return setError('Cep inválido')
            }
            setAdress({...address, cidade: e.data.localidade, estado: e.data.uf})
            setLoading(false)
        })
        .catch(err => {
            setError('Algo de errado ocorreu, tente novamente mais tarde ou entre em contato conosco')
            setLoading(false)
        })
    }

    return (
        <motion.div
            className={styles.CEContainer}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <h2 className={styles.formTitle}>Endereço de Entrega</h2>
            {error && <button
                className={styles.errorDisclaimer}
                onClick={e => setError('')}
            >{error}</button>}
            <form className={styles.CEForm} onSubmit={handleSubmit}>
                <FloatingTagInput
                    label="Cep"
                    value={address['cep']}
                    onChange={e => setAdress({...address, cep: e.target.value})}
                />
                <button className={styles.fetchCepData}>{loading ? <LoadingAnimation /> : 'Buscar'}</button>
                <FloatingTagInput
                    label="Estado"
                    value={address['estado']}
                    disabled="true"
                    className={styles.notEnabledInputs}
                />
                <FloatingTagInput
                    label="Cidade"
                    value={address['cidade']}
                    disabled="true"
                    className={styles.notEnabledInputs + ' ' + styles.fullLineInput}
                    styles={{'z-index': '30'}}
                />
                <FloatingTagInput
                    label="Bairro"
                    value={address['bairro']}
                    onChange={e => setAdress({...address, bairro: e.target.value})}
                    className={styles.fullLineInput}
                />
                <FloatingTagInput
                    label="Rua"
                    value={address['rua']}
                    onChange={e => setAdress({...address, rua: e.target.value})}
                    className={styles.fullLineInput}
                />
                <FloatingTagInput
                    label="Número"
                    value={address['numero']}
                    onChange={e => setAdress({...address, numero: e.target.value})}
                />
                <FloatingTagInput
                    label="Complemento(opcional)"
                    value={address['complemento']}
                    onChange={e => setAdress({...address, complemento: e.target.value})}
                />
            </form>
        </motion.div>
    )
}
 
export default Entrega;