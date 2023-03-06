import React from 'react'
import styles from './ButtonWhite.module.scss'

export default function ButtonWhite(props) {
  return (
    <button className={`${styles['button-white']}`}>{props.text}</button>
  )
}
