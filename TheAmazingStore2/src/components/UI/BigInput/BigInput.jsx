import React from 'react';
import styles from './BigInput.module.scss'

export default function BigInput(props) {
  return (
    <div className={`${styles['big-input']}`}>
      <p className={`${styles['big-input__title']}`} style={{marginTop:props.marginTop}}>{props.title}</p>
      <input className={`${styles['big-input__input']}`} type={props.type}></input>
    </div>
  );
}
