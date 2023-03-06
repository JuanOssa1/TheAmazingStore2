import React from 'react';
import BigInput from '../UI/BigInput/BigInput';
import ButtonBlue from '../UI/ButtonBlue/ButtonBlue';
import styles from './AppMainContent.module.scss'

export default function AppMainContent() {
  return (
    <div className={`${styles['main-content']}`}>
        <p className={`${styles['main-content__title']}`}>Iniciar Sesión</p>
        <BigInput title="Correo electrónico: "></BigInput>
        <BigInput title="Contraseña: " type="password"></BigInput>
        <ButtonBlue text="Ingresar"></ButtonBlue>
        <p className={`${styles['main-content__register']}`}>¿Aún no tenes cuenta? <a>Registrate</a></p>
    </div>
  );
}
