import React from 'react'
import styles from './AppHeader.module.scss'
import ButtonWhite from '../UI/ButtonWhite/ButtonWhite'

export default function AppHeader() {
  return (
    <div className={`${styles['main-nav']}`}>
        <div className={`${styles['main-nav__left']}`}></div>
        <ButtonWhite text="Crear cuenta"></ButtonWhite>
    </div>
  )
}
