import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import FormTitle from '../UI/FormTitle/FormTitle';
import styles from './AppLogin.module.scss';
import LogContext from '../../context/log-context';
import { useState, useContext } from 'react';

export default function AppLogin() {
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const logCtx = useContext(LogContext);

  const [userInput, setUserInput] = useState({
    enteredEmail: '',
    enteredPassword: '',
    validEmail: true,
    validPassword: true,
  });
  const validateEmail = (currentValue) => {
    if (currentValue.length > 0) {
      if (!currentValue.includes('@')) {
        setUserInput((prevState) => {
          return { ...prevState, validEmail: false };
        });
      } else {
        setUserInput((prevState) => {
          return { ...prevState, validEmail: true };
        });
      }
    }
  };
  const validatePassword = (currentValue) => {
    if (currentValue.length < 8 || !specialCharacters.test(currentValue)) {
      setUserInput((prevState) => {
        return { ...prevState, validPassword: false };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, validPassword: true };
      });
    }
  };

  const emailChangeHandler = (event) => {
    let value2 = event.target.value.trim();
    validateEmail(value2);
    setUserInput((prevState) => {
      return { ...prevState, enteredEmail: value2 };
    });
  };
  const passwordChangeHandler = (event) => {
    let value2 = event.target.value.trim();
    validatePassword(value2);
    setUserInput((prevState) => {
      return { ...prevState, enteredPassword: event.target.value };
    });
  };
  const validateLogin = (event) => {
    event.preventDefault();
    console.log(userInput.enteredPassword);
    if (userInput.validEmail && userInput.validPassword) {
      if (userInput.enteredEmail && userInput.enteredPassword) {
        logCtx.setValidity(true);
      }
    }
  };

  return (
    <form className={`${styles['main-content']}`} onSubmit={validateLogin}>
      <FormTitle text="Iniciar Sesión" />
      <Input
        title="Correo electrónico: "
        onChange={emailChangeHandler}
        validInput={userInput.validEmail}
      />
      <Input
        title="Contraseña: "
        type="password"
        onChange={passwordChangeHandler}
        validInput={userInput.validPassword} //userInput.validPassword
      />
      <Button text="Ingresar" type="submit" />
      <p className={`${styles['main-content__register']}`}>
        ¿Aún no tenes cuenta? <a>Registrate</a>
      </p>
    </form>
  );
}
