import React from 'react';
import styles from './BigInput.module.scss'

export default function BigInput(props) {
  return (
    <>
      <p className={`${styles['medium-input__title']}`}>{props.title}</p>
      <input className={`${styles['medium-input']}`}></input>
    </>
  );
}
