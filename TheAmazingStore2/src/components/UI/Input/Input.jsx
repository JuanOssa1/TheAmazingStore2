import styles from './Input.module.scss';

export default function Input({
  marginTop,
  title,
  validInput,
  type,
  onChange,
  className,
}) {
  return (
    <div className={`${styles['big-input']}`}>
      <p className={`${styles['big-input__title']}`} style={{ marginTop }}>
        {title}
      </p>
      <input
        className={`${styles['big-input__input']} ${
          validInput || styles.invalid
        } ${className}`}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
