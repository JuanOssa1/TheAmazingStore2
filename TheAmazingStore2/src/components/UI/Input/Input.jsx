import styles from './Input.module.scss';

export default function Input(props) {
  return (
    <div className={`${styles['big-input']}`}>
      <p
        className={`${styles['big-input__title']}`}
        style={{ marginTop: props.marginTop }}
      >
        {props.title}
      </p>
      <input
        className={`${styles['big-input__input']} ${
          props.validInput || styles.invalid
        }`}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
}
