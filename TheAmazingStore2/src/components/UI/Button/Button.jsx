import React from 'react';
import styles from './Button.module.scss';

export default function Button({
  className,
  text,
  onClick,
  variant1,
  type = 'button',
}) {
  return (
    <button
      className={`${
        !variant1 ? styles['button-blue'] : styles['variant1']
      } ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
