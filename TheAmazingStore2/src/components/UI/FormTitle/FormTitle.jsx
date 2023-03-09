import React from 'react'
import styles from './FormTitle.module.scss'

export default function FormTitle(props) {
  return (
    <p className={`${styles['form-title']}`}>{props.text}</p>
  )
}
