import React from 'react';
import styles from './ButtonBlue.module.scss';

export default function ButtonBlue({
  className,
  width,
  margin,
  boxShadow,
  text,
  onClick,
}) {
  //arreglar estilos styles
  return (
    <button
      className={`${styles['button-blue']} ${className}`}
      style={{
        width: width,
        margin: margin,
        boxShadow: boxShadow,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
