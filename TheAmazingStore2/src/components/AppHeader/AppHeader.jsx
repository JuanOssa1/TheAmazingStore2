import React from 'react';
import styles from './AppHeader.module.scss';
import ButtonWhite from '../UI/ButtonWhite/ButtonWhite';

export default function AppHeader() {
  // arreglar margin
  return (
    <div className={`${styles['main-nav']}`}>
      <div className={`${styles['main-nav__left']}`}></div>
      <ButtonWhite text="Crear cuenta" margin="33px 40px 10px"></ButtonWhite>
    </div>
  );
}
