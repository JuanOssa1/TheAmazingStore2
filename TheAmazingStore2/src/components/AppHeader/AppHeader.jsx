import React from 'react';
import styles from './AppHeader.module.scss';
import Button from '../UI/Button/Button';

export default function AppHeader() {
  // arreglar margin
  return (
    <div className={`${styles['main-nav']}`}>
      <div className={`${styles['main-nav__left']}`} />
      <Button
        text="Crear cuenta"
        className={`${styles['main-nav__button']}`}
        variant1
      />
    </div>
  );
}
