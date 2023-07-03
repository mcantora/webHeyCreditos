/* BIBLIOTECAS */
import React from 'react';
/* ASSETS */
import WhatsAppSVG from '../../assets/whatsapp-white.svg';
/* UTILS */
/* import contact from '../../utils/CanalesContacto.json' */
/* ESTILOS */
import styles from './style.module.css';

export default function WhatsAppButton() {
  return (
    <a className='t1' id={styles.wb} href="https://wa.me/5491121750492" target="_blank" rel="noreferrer">
        <img src={WhatsAppSVG} alt="Estamos en WhatsApp"/>
    </a>
  )
};