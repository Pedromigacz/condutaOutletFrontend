import React, { useState } from 'react';
import * as styles from '../styles/Entrega.module.css'
import { FloatingTagInput } from './'

const Entrega = () => {
    const [address, setAdress] = useState({
        cep: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: ''
    })

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className={styles.CEContainer}>
            <h2 className={styles.formTitle}>Endereço de Entrega</h2>
            <form className={styles.CEForm} onSubmit={handleSubmit}>
                <FloatingTagInput
                    label="Cep"
                    value={address['cep']}
                    onChange={e => setAdress({...address, cep: e.target.value})}
                />
                <button className={styles.fetchCepData}>Buscar</button>
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
                    label="Complemento"
                    value={address['complemento']}
                    onChange={e => setAdress({...address, complemento: e.target.value})}
                />
            </form>
        </div>
    )
}
 
export default Entrega;