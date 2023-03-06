import React from 'react';
import styles from './BigInput.module.scss'

export default function MediumInput(props) {
  return (
    <div className={`${styles['medium-input']}`}>
      <p className={`${styles['medium-input__title']}`}>{props.title}</p>
      <input className={`${styles['medium-input__input']}`} type={props.type}></input>
    </div>
  );
}
