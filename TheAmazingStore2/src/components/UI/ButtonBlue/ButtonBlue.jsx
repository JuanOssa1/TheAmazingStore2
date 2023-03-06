import React from 'react'
import styles from './ButtonBlue.module.scss'

export default function ButtonBlue(props) {
  return (
    <button className={`${styles['button-blue']}`}>{props.text}</button>
  )
}
