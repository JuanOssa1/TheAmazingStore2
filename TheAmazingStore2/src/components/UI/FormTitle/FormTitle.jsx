import React from 'react';
import styles from './FormTitle.module.scss';

export default function FormTitle({ text, className }) {
  return <p className={`${styles['form-title']} ${className}`}>{text}</p>;
}
