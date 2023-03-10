import styles from './BigInput.module.scss';

export default function BigInput(props) {
  {
    console.log(props.validInput);
  }
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
